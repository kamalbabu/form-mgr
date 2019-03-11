let formData = {
    categories :[{
        name: 'Personal Details',
        query:[{
            entity:'Name',
            question:'We would like to have your full Name',
            options:{}
        },
        {
            entity:'Date of Birth',
            question:'Please provide date of birth',
            options:{}
        },
        {
            entity:'Address',
            question:'Please provide address.',
            options:{
                title:'Our system has found following address. Do you want to use?',
                choice:[
                    '445 Mount Eden Road, Mount Eden, Auckland.',
                    '21 Greens Road RD 2 Ruawai 0592'
                ]
            }
        },
        {
            entity:'Email',
            question:'Which emailID would you like to use',
            options:{}
        },
        {
            entity:'Contact Phone',
            question:'We would need your contact number',
            options:{}
        }]
    }]
}

export default formData;