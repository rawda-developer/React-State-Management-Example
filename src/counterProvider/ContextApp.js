/**
 * This pattern is used to share state without having to pass it around through props.
 */
import { ButtonCounterWithContext } from './ButtonCounterWithContext';
import { CounterProvider } from './CounterProvider';
const ContextApp = () => {
  return (
    <CounterProvider>
      {' '}
      {/* <CounterProvider> is a wrapper component */}
      <h1>State Management With Context</h1>
      <ButtonCounterWithContext />{' '}
      {/* <ButtonCounterWithContext /> is a component */}
    </CounterProvider>
  );
};
export default ContextApp;
