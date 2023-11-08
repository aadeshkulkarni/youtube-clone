import React from 'react'

const commentsData = [
  {
    name: "Aadesh Kulkarni",
    text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    replies: [
      {
        name: "Ashok Kulkarni",
        text: "lorem ipsum",
        replies: [{
          name: "Aadesh Kulkarni",
          text: "lorem ipsum",
          replies: [{
            name: "Aadesh Kulkarni",
            text: "lorem ipsum",
          }]
        },]
      }
    ]
  },
  {
    name: "Aadesh Kulkarni",
    text: "lorem ipsum",
  },
  {
    name: "Aadesh Kulkarni",
    text: "lorem ipsum",
  },
  {
    name: "Aadesh Kulkarni",
    text: "lorem ipsum",
  },
  {
    name: "Aadesh Kulkarni",
    text: "lorem ipsum",
  },
]

const Comment = ({ data }) => {
  return <div className="flex p-2">
    <img className="w-16" alt="user" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" />
    <div>
      <div className="py-1 font-bold">{data.name}</div>
      <div className="font-light text-sm">{data.text}</div>
    </div>

  </div>
}
const CommentsList = ({ list }) => {
  return list.map((comment, index) => <div>
    <Comment key={index} data={comment} />
    {comment.replies && (<div className="pl-8">
      <CommentsList list={comment.replies} />
    </div>)}
  </div>
  )
}

const CommentsContainer = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList list={commentsData} />
    </div>
  )
}

export default CommentsContainer