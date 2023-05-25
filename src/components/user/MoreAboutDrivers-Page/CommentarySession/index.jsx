import React, { useState } from 'react';
import { Container, Card, ListGroup, Form, Button } from 'react-bootstrap';
import './style.css'

const CommentarySystem = () => {
  const [reply, setReply] = useState('');

  const [comments, setComments] = useState([
    {
      id: 1,
      text: 'This is the first comment.',
      replies: [
        { id: 1, text: 'Reply to the first comment.' },
        { id: 2, text: 'Another reply to the first comment.' },
      ],
    },
    {
      id: 2,
      text: 'This is the second comment.',
      replies: [
        { id: 1, text: 'Reply to the second comment.' },
      ],
    },
  ])

  
  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmit = (commentId) => (e) => {
    e.preventDefault();
    // Logic to handle the submission of the reply
    console.log(`Submitting reply "${reply}" for comment ID ${commentId}`);
    
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            { id: comment.replies.length + 1, text: reply}
          ]
        }
      }
      return comment
    })

    setComments(updatedComments)
    setReply('');
  };

  return (
    <Container className='commentary-system'>
      <Card>
        <Card.Body>
          <Card.Title>Comments</Card.Title>
          <ListGroup>
            {comments.map((comment) => (
              <ListGroup.Item key={comment.id}>
                <div className="comment-text">{comment.text}</div>
                <ListGroup className="replies-list">
                  {comment.replies.map((reply) => (
                    <ListGroup.Item key={reply.id} variant="secondary">
                      {reply.text}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Form onSubmit={handleSubmit(comment.id)}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Write a reply..."
                      value={reply}
                      onChange={handleReplyChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit Reply
                  </Button>
                </Form>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CommentarySystem;
