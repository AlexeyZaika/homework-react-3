import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const TestForm = (props) => {
  function onSubmitHandler(values, actions) {
    props.onSubmit();
    actions.resetForm({ name: '', executor: '', checking: '', date: '', term: '' });
    props.getValueForm(values);
  }

  return (
    <div>
      <h2 className="modal__title">Данные теста:</h2>
      <Formik
        initialValues={{ name: '', executor: '', checking: '', date: '', term: '' }}
        onSubmit={onSubmitHandler}
        validate={(values) => {
          const errors = {};
          for (let key in values) {
            if (values[key] === '') {
              errors[key] = 'Заполните данные';
            }
          }
          return errors;
        }}
      >
        {() => (
          <Form className="form" autoComplete="off">
            <div className="form__line">
              <Field type="text" name="name" className="form__input" />
              <ErrorMessage name="name" component="div" className="form__error" />
            </div>
            <div className="form__line">
              <Field type="text" name="executor" className="form__input" />
              <ErrorMessage name="executor" component="div" className="form__error" />
            </div>
            <div className="form__line">
              <Field type="text" name="checking" className="form__input" />
              <ErrorMessage name="checking" component="div" className="form__error" />
            </div>
            <div className="form__line">
              <Field type="text" name="date" className="form__input" />
              <ErrorMessage name="date" component="div" className="form__error" />
            </div>
            <div className="form__line">
              <Field type="text" name="term" className="form__input" />
              <ErrorMessage name="term" component="div" className="form__error" />
            </div>
            <button type="submit" className="form__button">Добавить тест</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

TestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  getValueForm: PropTypes.func.isRequired,
}