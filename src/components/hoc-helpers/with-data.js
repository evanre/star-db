import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData, type = false) => {
    return class extends Component {
        state = {
            data: null,
            hasError: false,
            initialized: false
        };

        updateData(id) {
            getData(id)
                .then((data) => {
                    this.setState({ data })
                })
                .catch((err) => {
                    console.error( err );
                    this.setState({ hasError: true })
                });
        }

        // componentDidUpdate(prevProps) {
        //     console.log( 'componentDidUpdate' );
        //
        //     const { itemId } = this.props;
        //     if(itemId !== prevProps.itemId) {
        //         this.updateData(itemId);
        //     }
        // }

        componentDidMount() {
            console.log( 'componentDidMount' );
            const { itemId } = this.props;

            if(itemId === false) {
                return;
            }

            this.updateData(itemId);
        }

        render() {
            if (this.state.hasError) {
                return <div className="card item-details"><ErrorIndicator /></div>
            }

            const { data } = this.state;

            if (!data) {
                return <div className="card item-details"><Spinner/></div>
            }

            return <View {...this.props} type={type} data={data}/>
        }
    };
};

export default withData;
