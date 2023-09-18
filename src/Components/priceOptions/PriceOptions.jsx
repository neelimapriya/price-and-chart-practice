import PriceOption from "../priceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions =[{
        
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Free weights area",
              "Locker room access",
              "Group fitness classes (limited)"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to cardio equipment",
              "Free weights area",
              "Locker room access",
              "Unlimited group fitness classes",
              "Access to sauna and steam room"
            ]
          },
          {
            "id": 3,
            "name": "VIP Membership",
            "price": 79.99,
            "features": [
              "Access to cardio equipment",
              "Free weights area",
              "Locker room access",
              "Unlimited group fitness classes",
              "Access to sauna and steam room",
              "Personal training session (1/month)",
              "Towel service"
            ]
          }
        ]
      

    return (
        <div className="m-12">
             <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                PriceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;