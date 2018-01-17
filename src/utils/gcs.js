const Storage = require('@google-cloud/storage')

const bucketName = process.env.BUCKET_NAME
const storage = Storage({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.KEYFILE_PATH,
})

const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${bucketName}/userupload/${filename}`
}

function upload(photoObj) {
  const bucket = storage.bucket(bucketName)
  const newFilename = Date.now()
  const newFile = bucket.file('userupload/' + newFilename)

  return new Promise((resolve, reject) => {
    newFile
      .save(photoObj.buffer, {
        metadata: {
          contentType: photoObj.mimetype,
        },
      })
      .then(() => newFile.makePublic())
      .then(resolve(getPublicUrl(newFilename)))
      .catch(reject)
  })
}

function decodeBase64Image(photo) {
  const matches = photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

  if (matches.length !== 3) {
    return new Error('Invalid input string')
  }

  return {
    mimetype: matches[1],
    buffer: Buffer.from(matches[2], 'base64')
  }
}

module.exports = photo => upload(decodeBase64Image(photo))