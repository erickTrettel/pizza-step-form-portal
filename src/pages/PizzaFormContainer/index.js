import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Stepper from '../../components/Stepper';

import Start from '../../components/Start';
import SelectDough from '../../components/SelectDough';
import SelectSize from '../../components/SelectSize';
import SelectFilling from '../../components/SelectFilling';
import Ketchup from '../../components/Ketchup';

import {
  next as nextStep,
  previous as preivousStep,
} from '../../store/stepper';

import './styles.css';

export default function PizzaFormContainer() {
  const currentStep = useSelector((state) => state.stepper.step);

  const dispatch = useDispatch();

  const next = useCallback(() => dispatch(nextStep()), [dispatch]);
  const previous = useCallback(() => dispatch(preivousStep()), [dispatch]);

  return (
    <section>
      <header className='mb-5'>
        <Stepper
          steps={[
            { title: 'Início' },
            { title: 'Massa' },
            { title: 'Tamanho' },
            { title: 'Recheio' },
            { title: 'Ketchup' },
          ]}
          currentStep={currentStep}
        />
      </header>

      <article className='pizza-form-container'>
        {currentStep === 0 && <Start next={next} />}
        {currentStep === 1 && <SelectDough next={next} previous={previous} />}
        {currentStep === 2 && <SelectSize next={next} previous={previous} />}
        {currentStep === 3 && <SelectFilling next={next} previous={previous} />}
        {currentStep === 4 && <Ketchup previous={previous} />}
      </article>
    </section>
  );
}
