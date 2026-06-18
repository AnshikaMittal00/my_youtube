import React from 'react'
import Comment from './Comment'
    const commentData=[
    {
        name:"Anshika Mittal",
        text:"heyyyy",
        replies:[
            {
               name:"Anshika Mittal",
               text:"heyyyy",
               replies:[
                {
                  name:"Anshika Mittal",
                  text:"heyyyy",  
                }
               ]
            },
            {
                name:"Anshika Mittal",
                text:"heyyyy",
            }
        ]
        
    },
     {
        name:"Anshika Mittal",
        text:"heyyyy",
        replies:[
            {
                  name:"Anshika Mittal",
                  text:"heyyyy",  
                   replies:[
                {
                  name:"Anshika Mittal",
                  text:"heyyyy",  
                }
               ]
            },
            {
                name:"Anshika Mittal",
                  text:"heyyyy",  
                   replies:[
                {
                  name:"Anshika Mittal",
                  text:"heyyyy",  
                }
               ]
            }
        ]
        
    }
    ]
    const CommentList=({comments})=>{
        if(!comments) return null;
        return comments.map((comment,index)=>(
        <div>
       <div>
         <Comment key={index} name={comment.name} text={comment.text}/>
      </div> 
      <div className='pl-5  border border-l border-black ml-5'>
        <CommentList key={index} comments={comment.replies}/>
      </div>
        </div>
      
    ))}
const CommentContainer = () => {

  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold' >Comments:</h1>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer