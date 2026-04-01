import { Check } from 'lucide-react';
import ModelCard from './ModelCard';
import { use } from 'react';

const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise)

    return (
        <div className='max-w-[80%] mx-auto mb-20'>    
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {models.map((model =>

                    <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
                ))}
            </div>
        </div>
    );
};

export default Models;