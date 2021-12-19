import React, { useEffect, useState } from 'react';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/ActionCreators';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [state, setState] = useState({
    id: Date.now(),
    img: '',
    brand: '',
    model: '',
    year: '',
    price: '',
  });
  const [error, setError] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addPost = () => {
    dispatch(addCard(state));
    navigate('/content');
  };

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    Object.values(state).some((item) =>
      item === '' ? setError(true) : setError(false)
    );
  }, [state]);

  return (
    <div className="form-page">
      <h1>Add car</h1>
      <div className="form">
        <div className="form-header">
          <Input
            onChange={onChangeHandler}
            name={'img'}
            placeholder={'Image Url'}
          />
        </div>
        <div className="wrapper">
          <Input
            onChange={onChangeHandler}
            name={'brand'}
            placeholder={'Brand'}
          />
          <Input
            onChange={onChangeHandler}
            name={'model'}
            placeholder={'Model'}
          />
          <Input
            onChange={onChangeHandler}
            name={'year'}
            placeholder={'Year'}
          />
          <Input
            onChange={onChangeHandler}
            name={'price'}
            placeholder={'Price'}
          />
        </div>
      </div>
      <Button disabled={error} onClick={addPost} type={'add'}>
        Add
      </Button>
    </div>
  );
};

export default FormPage;
