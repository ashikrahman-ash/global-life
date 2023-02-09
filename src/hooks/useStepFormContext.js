import { useContext } from 'react';
import StepFormContext from '../context/StepFormContext';

const useStepFormContext = () => {
    return useContext(StepFormContext);
};

export default useStepFormContext;