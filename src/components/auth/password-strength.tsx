import { validatePassword } from '@/lib/validation';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const { errors } = validatePassword(password);
  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Contains a number', met: /[0-9]/.test(password) },
    { label: 'Contains an uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'No special characters', met: !/[^a-zA-Z0-9]/.test(password) },
  ];

  return (
    <div className="mt-2">
      <p className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</p>
      <ul className="space-y-1">
        {requirements.map((req, index) => (
          <li
            key={index}
            className={`text-sm flex items-center ${
              req.met ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <span className="mr-2">{req.met ? '✓' : '○'}</span>
            {req.label}
          </li>
        ))}
      </ul>
    </div>
  );
}