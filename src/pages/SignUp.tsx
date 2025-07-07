
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import OnboardingModal from '../components/onboarding/OnboardingModal';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showOnboarding, setShowOnboarding] = useState(false);

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      password: ''
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password must contain at least one letter, one number & 8 characters';
    } else if (formData.password.length < 8 || !/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one letter, one number & 8 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Sign up data:', formData);
      setShowOnboarding(true);
    }
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
    setShowOnboarding(true);
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook sign up clicked');
    setShowOnboarding(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left side - Content */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="max-w-md w-full">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Create your own booking calendar
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Schedule appointments, manage your calendar and accept payments anywhere, with free online booking software.
              </p>
            </div>
            
            {/* Team image showing healthcare professionals */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/542b9f9b-0162-481e-855e-e96dd059a00a.png" 
                alt="Healthcare professionals using booking software" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right side - Sign up form */}
        <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
          <div className="max-w-sm w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`h-12 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder=""
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`h-12 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder=""
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`h-12 pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder=""
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md"
              >
                Sign up
              </Button>

              <div className="text-center">
                <span className="text-gray-500">or</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleSignUp}
                  className="h-12 flex items-center justify-center space-x-2"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                  </svg>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleFacebookSignUp}
                  className="h-12 flex items-center justify-center space-x-2"
                >
                  <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700">
                  Login
                </Link>
              </p>

              <p className="text-xs text-gray-500 text-center">
                By signing in, you agree to our{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                  Terms of Use
                </Link>{' '}
                &{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>

      {showOnboarding && (
        <OnboardingModal 
          isOpen={showOnboarding} 
          onClose={() => setShowOnboarding(false)}
          userEmail={formData.email}
          userName={formData.fullName}
        />
      )}
    </>
  );
};

export default SignUp;
