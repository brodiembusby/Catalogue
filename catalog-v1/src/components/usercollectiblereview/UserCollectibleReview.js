import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import api from '../../api/axiosConfig';


const UserPileReview = ({ collectible, getCollectibleData, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const collectibleId  = params.collectibleId;
  
  useEffect(() => { 
    getCollectibleData(collectibleId);
  }, );

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;
  
    try {
      const response = await api.post("/reviews", { 
        reviewBody: rev.value, 
        name: collectibleId  
      });
  
      const newReview = response.data;
      const updatedReviews = [...reviews, { body: newReview.reviewBody }];
  
      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.error("Add review error", err);
    }
  };

  return (
    <Container>
      <Row>
        <Col><h3>Review for {collectible?.name}</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={collectible?.image} alt="Collectible" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {
            reviews?.map((r, index) => {
              return (
                <>
                  <Row>
                    <Col>{r.body}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </>
              )
            })
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default UserPileReview;
