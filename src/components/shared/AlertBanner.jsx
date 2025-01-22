import React, { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { X, Info, AlertCircle, Check } from 'lucide-react';

const VARIANTS = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: Info,
    iconColor: 'text-blue-500',
    textColor: 'text-blue-700'
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: AlertCircle,
    iconColor: 'text-yellow-500',
    textColor: 'text-yellow-700'
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: Check,
    iconColor: 'text-green-500',
    textColor: 'text-green-700'
  }
};

const AlertBanner = ({
  title,
  message,
  variant = 'info',
  dismissible = true,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const style = VARIANTS[variant] || VARIANTS.info;
  const Icon = style.icon;

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <Alert className={`${style.bg} ${style.border} shadow-sm`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <Icon className={`h-5 w-5 ${style.iconColor} mt-1`} />
          <div className="ml-3">
            {title && (
              <AlertTitle className={`font-semibold ${style.textColor}`}>
                {title}
              </AlertTitle>
            )}
            <AlertDescription className={style.textColor}>
              {message}
            </AlertDescription>
          </div>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={`ml-4 ${style.textColor} hover:opacity-75 focus:outline-none`}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </Alert>
  );
};

export default AlertBanner;