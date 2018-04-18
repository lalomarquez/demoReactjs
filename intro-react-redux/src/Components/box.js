import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'


// import { getUsers } from '../Helpers/actionCreators.js'
// import { connect } from 'react-redux'

class ChangeColor extends React.Component {
    render() {
        return (
            <div >
                <div className="row col-12">
                    <Card body outline color="primary">
                        <CardBody>
                            <CardTitle>axios</CardTitle>
                            <CardText>llamas asincronas con axios</CardText>
                            <Button color="primary" >Change Color</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         users: state.users
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addProduct(product) {
//             dispatch(addToCart(product))
//         }
//     }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(ChangeColor)

export default ChangeColor