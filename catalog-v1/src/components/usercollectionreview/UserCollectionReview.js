import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import api from '../../api/axiosConfig';


const UserCollectionReview = ({ card, getCardData, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const cardId  = params.cardId;
  
  useEffect(() => {
    // getCardData(cardId);
    console.log(cardId)
    getCardData(card)
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", { 
        reviewBody: rev.value, 
        Name: cardId  
      });
      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.error("Add review error", err);
    }
  };

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={cardId?.image} alt="Card" />
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
            reviews?.map((r) => {
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

export default UserCollectionReview;
