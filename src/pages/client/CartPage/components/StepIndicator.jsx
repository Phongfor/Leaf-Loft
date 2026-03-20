const steps = [
    { number: 1, label: 'SHOPPING CART' },
    { number: 2, label: 'CHECKOUT' },
    { number: 3, label: 'ORDER STATUS' },
];

function StepIndicator({ currentStep, onStepClick }) {
    return (
        <div className='bg-white border-b border-gray-100'>
            <div className='flex items-center max-w-5xl mx-auto px-6 py-5'>
                {steps.map((step, index) => {
                    const isActive = step.number === currentStep;
                    const isDone = step.number < currentStep;
                    const isLast = index === steps.length - 1;
                    const isClickable = isDone && onStepClick;

                    return (
                        <div key={step.number} className='flex items-center'>
                            <div
                                className={`flex items-center gap-2.5 ${isClickable ? 'cursor-pointer hover:opacity-70 transition-opacity' : ''}`}
                                onClick={() => isClickable && onStepClick(step.number)}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 transition-colors
                                    ${isActive || isDone
                                        ? 'bg-gray-900 text-white'
                                        : 'border-2 border-gray-300 text-gray-400'}`}
                                >
                                    {isDone ? (
                                        <svg width='12' height='12' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                                            <polyline points='20,6 9,17 4,12' />
                                        </svg>
                                    ) : step.number}
                                </div>
                                <span className={`text-xl font-semibold tracking-widest uppercase transition-colors
                                    ${isActive || isDone ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {step.label}
                                </span>
                            </div>

                            {!isLast && (
                                <div className={`mx-4 h-px w-24 md:w-36 transition-colors
                                    ${isDone ? 'bg-gray-900' : 'bg-gray-200'}`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StepIndicator;