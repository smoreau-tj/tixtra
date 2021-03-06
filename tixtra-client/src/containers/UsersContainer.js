import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import UserCard from '../components/UserCard'

// // import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListSubheader from '@material-ui/core/ListSubheader';


class UsersContainer extends React.Component {

  state = {
    searchTerm: "",
    filteredUsers: []
  }

  applyFilter = () => {
    const filtered = this.props.users.filter(user => {
      return user.username.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    this.setState({
      filteredUsers: filtered
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.applyFilter())
  };

  handleSubmit = (event) => {
    console.log("submit")
    event.preventDefault();
    this.setState({
      searchTerm: ""
    })
  }


  componentDidMount() {
   this.props.fetchUsers()
  }

  render(){
    return (
      <div>
        <main>
          {/* Hero unit */}
          <div className="hero-content" style={{backgroundColor: "#37474F",
          padding: "theme.spacing(8, 0, 6)"}}>
            <Container
              maxWidth="sm"
              style={{paddingBottom: "2%", paddingTop: "1%", backgroundColor: "#37474F"}}>
              <div>
                <form className='search-bar' onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search Users"
                    name="searchTerm"
                    style={{padding: "6px", marginTop: "8px", marginRight: "16px", fontSize: "17px", width: "100%"}}
                    onChange={this.handleChange}
                  />
                </form>
              </div>
            </Container>
          </div>
          <Container spacing={2} className="card-grid" style={{paddingTop: "theme.spacing(8)",
          paddingBottom: "theme.spacing(8)", maxWidth: "md", backgroundColor: "#ECEFF1"}}>
            {/* End hero unit */}
            <Grid container justify="space-around" spacing={2} style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
              {this.state.filteredUsers.length > 0
                ? this.state.filteredUsers.map(user => {
                return <UserCard key={user.id} {...user}/>
                })
                : this.props.users.map(user => {
                return <UserCard key={user.id} {...user}/>
                })
              }
            </Grid>
          </Container>
        </main>

        <footer className="footer" style={{ backgroundColor: "#FAFAFA",
          paddingTop: "2%" }}>
          <Typography variant="h6" align="center" gutterBottom>
            Tixtra
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            You made it to the end!
          </Typography>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  tickets: state.tickets
})


export default connect(mapStateToProps, { fetchUsers })(UsersContainer);
