import styled from "styled-components";

const BookingPageWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 20px;
background-image: url("https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png");
background-size: cover; /* Adjust as needed */
background-position: center; /* Adjust as needed */
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    text-align: center;
    color: #0077cc;
  }

  h4 {
    margin-bottom: 10px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .datepicker,
  .timepicker {
    width: 100%;
    margin: 10px 0;
  }

  .btn-primary {
    background-color: #0077cc;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-primary:hover {
    background-color: #00568c;
  }

  .btn-dark {
    background-color: #343a40;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-dark:hover {
    background-color: #1d2124;
  }
`;

export default BookingPageWrapper;
