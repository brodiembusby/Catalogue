// This doesnt run but im keeping in jsut in case i figure it out later










// App.test.js
import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

describe('App Component', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock.restore();
  });

  it('should fetch card data and update state', async () => {
    const cardId = '123';
    const mockCardData = {
      id: '664bbe73e119b3dccfd83950',
      name: 'No idea the name',
      reviews: [{ body: 'Great card!' }]
    };

    mock.onGet(`/api/v1/cards/${cardId}`).reply(200, mockCardData);

    const { getByText } = render(<App />);

    await act(async () => {
      // Simulate calling getCardData
      await App.getCardData(cardId);
    });

    expect(App.card).toEqual(mockCardData);
    expect(App.reviews).toEqual(mockCardData.reviews);
  });

  it('should handle errors', async () => {
    const cardId = '123';

    mock.onGet(`/api/v1/cards/${cardId}`).reply(500);

    console.error = jest.fn(); // Mock console.error to silence the error in test output

    await act(async () => {
      // Simulate calling getCardData
      await App.getCardData(cardId);
    });

    expect(console.error).toHaveBeenCalledWith(
      "Man we having problems getting yo card data",
      expect.any(Error)
    );
  });
});
