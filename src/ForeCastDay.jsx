import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const ForeCastDay = ({ forecast }) => {
  return (
    <Container>
      <Row className="mt-5">
        {forecast.map((f, index) => {
          return (
            <Container key={index}>
              <h3>{f.date}</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Humidity</th>
                    <th>Temperature</th>
                    <th>Icon</th>
                  </tr>
                </thead>

                <tbody>
                  {f.hours.map((hour, index) => {
                    return (
                      <tr key={index}>
                        <td>{hour.time}</td>
                        <td>{hour.humidity}</td>
                        <td>{hour.temperature}</td>
                        <td>
                          <img src={hour.icon} alt="weather icon" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          );
        })}
      </Row>
    </Container>
  );
};

export default ForeCastDay;
