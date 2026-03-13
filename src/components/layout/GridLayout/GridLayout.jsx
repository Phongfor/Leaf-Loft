import clsx from 'clsx';

function GridLayout({ children, className }) {
    return (
        <div className="max-w-7xl mx-auto">
            <div
                className={clsx(
                    'grid gap-6',
                    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default GridLayout;