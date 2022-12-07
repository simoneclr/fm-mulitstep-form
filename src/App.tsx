import Container from "./components/layout/Container";
import PaymentPlanForm from "./features/paymentPlanForm/PaymentPlanForm";

function App() {
  return (
    <main className="font-ubuntu h-screen bg-magnolia">
      <Container>
        <PaymentPlanForm />
      </Container>      
    </main>
  );
}

export default App;
