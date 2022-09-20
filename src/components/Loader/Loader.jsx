import { WrapLoad, AnimationLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapLoad>
      <AnimationLoader
        color="orangered"
        visible={true}
        ariaLabel="falling-lines-loading"
        wrapperStyle={{}}
      />
    </WrapLoad>
  );
};
export default Loader;
