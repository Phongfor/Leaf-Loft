import CustomerCard from "../CustomerCard/CustomerCard";


function CustomerGrid({ customers }) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {customers.map((c) => (
                <CustomerCard key={c.id} customer={c} />
            ))}
        </div>
    );
}

export default CustomerGrid;