import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Preview.css';
/* eslint-disable import/first */
const previewCategoryData = [{
    entity: 'Name',
    value: 'John Doe'
}, {
    entity: 'Date of Birth',
    value: '05/07/1989'
}, {
    entity: 'Address',
    value: '445 Mount Eden Road, Mount Eden, Auckland.'
}]
const previewCategoryData1 = [{
    entity: 'Name',
    value: ''
}, {
    entity: 'Date of Birth',
    value: ''
}, {
    entity: 'Address',
    value: ''
}]


class Preview extends Component {
    state={
        data:previewCategoryData
    }
    constructor(props) {
        super(props);
    }
    componentDidMount(){
       this.setState({
           data:this.props.data
       })
    }

    renderPreview() {
        let previewElem = [];
        for (let index in this.state.data) {
            previewElem.push(<EntityView key={index} item={this.state.data[index]} />)
        }
        return previewElem;
    }

    render() {
        return (
            <div>
                {this.renderPreview()}
            </div>
        );
    }
}

export default Preview;


function EntityView(props) {
    return (
    <Card>
        <CardContent>
            <Typography gutterBottom>
                {props.item.entity}
            </Typography>
            <Typography variant="h6" component="h5">{props.item.value}</Typography>
        </CardContent>
    </Card>);
}

