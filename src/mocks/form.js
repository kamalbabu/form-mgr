let formData = {
    categories :[{
        name: 'Personal Details',
        query:[{
            entity:'Name',
            question:'Provide full Name',
            options:[
                'John Smith.'
            ]
        },
        {
            entity:'Date of Birth',
            question:'Date of birth ?',
            options:[
                ''
            ]
        },
        {
            entity:'Address',
            question:'Where do you live?',
            options:[
                '445 Mount Eden Road, Mount Eden, Auckland.'
            ]
        },{
            entity:'Address',
            question:'Where do you live?',
            options:[
                '445 Mount Eden Road,<br/> Mount Eden, Auckland.'
            ]
        }]
    }]
}

export default formData;