import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import api from '../../api/axiosConfig';


const UserCollectionReview = ({ getCardData, card, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const cardId = params._id;

  useEffect(() => {
    getCardData(cardId);
  }, []);

  useEffect(() => {
    console.log(`Fetched collection ID: ${cardId}`);
  }, [cardId]);
 // THis works
  useEffect(() => {
    console.log('Card data:', card);
    console.log('Card data:', card.cardId);
    console.log('Card data:', card.Name);
    console.log('Card data:', cardId);
    // console.log('Card data:', card.);
    // console.log('Card data:', card);
  }, [card]);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, Name: cardId });
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
          <img src={card?.image} alt="Card" />
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
