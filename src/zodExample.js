import React, { useState } from 'react';
import { z } from 'zod';

// Define Zod schemas for each step
const personalInfoSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

const addressSchema = z.object({
  street: z.string().min(5, { message: 'Street address must be at least 5 characters' }),
  city: z.string().min(3, { message: 'City must be at least 3 characters' }),
  zipCode: z.string().regex(/^\d{5}(?:-\d{4})?$/, { message: 'Invalid ZIP code' }),
});

const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Invalid card number' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: 'Invalid expiry date' }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: 'Invalid CVV' }),
});

// Define types for each step
type PersonalInfo = z.infer<typeof personalInfoSchema>;
type Address = z.infer<typeof addressSchema>;
type Payment = z.infer<typeof paymentSchema>;

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [address, setAddress] = useState<Address>({
    street: '',
    city: '',
    zipCode: '',
  });
  const [payment, setPayment] = useState<Payment>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const validateStep = (data: any, schema: any) => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
        return false;
      }
      return false;
    }
  };

  const handleSubmit = () => {
    if (step === 1 && validateStep(personalInfo, personalInfoSchema)) {
      nextStep();
    } else if (step === 2 && validateStep(address, addressSchema)) {
      nextStep();
    } else if (step === 3 && validateStep(payment, paymentSchema)) {
      // All steps validated, submit the data
      console.log('Form submitted:', { personalInfo, address, payment });
      alert("Form submitted to console");
    }
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {step === 1 && (
        <div>
          <h2>Personal Information</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Address</h2>
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleAddressChange}
          />
          {errors.street && <p style={{ color: 'red' }}>{errors.street}</p>}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
          />
          {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={address.zipCode}
            onChange={handleAddressChange}
          />
          {errors.zipCode && <p style={{ color: 'red' }}>{errors.zipCode}</p>}
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Payment Information</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={payment.cardNumber}
            onChange={handlePaymentChange}
          />
          {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={payment.expiryDate}
            onChange={handlePaymentChange}
          />
          {errors.expiryDate && <p style={{ color: 'red' }}>{errors.expiryDate}</p>}
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={payment.cvv}
            onChange={handlePaymentChange}
          />
          {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
        </div>
      )}

      <div>
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        <button onClick={handleSubmit}>{step === 3 ? 'Submit' : 'Next'}</button>
      </div>
    </div>
  );
}

export default MultiStepForm;
