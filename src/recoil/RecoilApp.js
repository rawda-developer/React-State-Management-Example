import { RecoilRoot } from 'recoil';
import { ButtonCounterWithRecoil } from './ButtonCounterWithRecoil';
const RecoilApp = () => {
  return (
    <RecoilRoot>
      {' '}
      {/* <CounterProvider> is a wrapper component */}
      <h1>State Management With Recoil</h1>
      <ButtonCounterWithRecoil />
    </RecoilRoot>
  );
};
export default RecoilApp;
