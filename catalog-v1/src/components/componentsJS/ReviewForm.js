import { FormGroup, Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, defaultValue, labelText, revText }) => {
  return (
    <Form>
      <FormGroup className="reviewForm" controlId="ExampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </FormGroup>
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default ReviewForm;
