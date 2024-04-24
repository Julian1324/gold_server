export const myProductsFilter = (err: any, result: any) => {
    if (!!err) return err;
    result.docs = result.docs.reduce((acc: any, currentValue: any) => {
        acc.push(
            {
                _id: currentValue._id,
                category_id: currentValue.category_id,
                name: currentValue.name,
                description: currentValue.description,
                price: currentValue.price,
                discount: currentValue.discount,
                quantity: currentValue.quantity,
                status: currentValue.status
            }
        );
        return acc;
    }, []);
    return result;
}