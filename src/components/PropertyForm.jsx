import React from 'react';
import { useForm } from 'react-hook-form';

const PropertyForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
      <div className="mb-3">
        <label htmlFor="area" className="form-label">Area (sq ft)</label>
        <input
          type="number"
          className={`form-control ${errors.area ? 'is-invalid' : ''}`}
          id="area"
          {...register('area', { required: 'Area is required', min: 1 })}
        />
        {errors.area && <div className="invalid-feedback">{errors.area.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="bedrooms" className="form-label">Number of Bedrooms</label>
        <input
          type="number"
          className={`form-control ${errors.bedrooms ? 'is-invalid' : ''}`}
          id="bedrooms"
          {...register('bedrooms', { required: 'Number of bedrooms is required', min: 1 })}
        />
        {errors.bedrooms && <div className="invalid-feedback">{errors.bedrooms.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location</label>
        <select 
          className={`form-select ${errors.location ? 'is-invalid' : ''}`}
          id="location" 
          {...register('location', { required: 'Location is required' })}
        >
          <option value="">Select location</option>
          <option value="urban">Urban</option>
          <option value="suburban">Suburban</option>
          <option value="rural">Rural</option>
        </select>
        {errors.location && <div className="invalid-feedback">{errors.location.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age of the Property (years)</label>
        <input
          type="number"
          className={`form-control ${errors.age ? 'is-invalid' : ''}`}
          id="age"
          {...register('age', { required: 'Age of the property is required', min: 0 })}
        />
        {errors.age && <div className="invalid-feedback">{errors.age.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Predict Price</button>
    </form>
  );
};

export default PropertyForm;
