import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import firebase from './config/db';
import moment from 'moment';
import 'moment/locale/he';
import './App.css';
import countdown from 'countdown';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

require('moment-countdown');

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

countdown.setLabels(
  ' אלפיות השנייה | שניה | דקה | שעה | יום | שבוע | חודש | שנה | עשור | מאה | אלף',
  ' אלפיות השנייה| שניות| דקות| שעות| ימים| שבועות| חודשים| שנים| עשורים| מאות שנים| אלפי שנים',
  ' ו- ',
  ' , ',
  'עכשיו'
);

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const GenderSwitch = withStyles({
  switchBase: {
    color: '#E281AB',
    '&$checked': {
      color: '#69C3FF'
    },
    '&$checked + $track': {
      backgroundColor: '#69C3FF',
      color: '#69C3FF'
    }
  },
  checked: {},
  track: { backgroundColor: '#E281AB' }
})(Switch);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: [],
      name: '',
      genderSw: true,
      endTimeStamp: '',
      isLoading: true,
      timeLeft: '',
      realGender: 'boy',
      nameError: false,
      showWinners: false
    };
  }

  handleSwChange = () => {
    this.setState({ genderSw: !this.state.genderSw });
  };

  generate = element => {
    return [...Array(this.state.votes.length).keys()].map(value =>
      React.cloneElement(element, {
        key: value
      })
    );
  };

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
    document.body.style.backgroundColor = 'ivory';

    window.scrollTo(0, 1);
    moment.locale('he');
    const fetchData = async () => {
      const db = firebase.firestore();
      let dbvotes = [];
      db.collection('votes')
        .orderBy('name')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            dbvotes.push(doc.data());
          });

          this.setState({ votes: dbvotes });
        });
    };
    fetchData();
    this.getTimeStampAndGender();
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value, nameError: false });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.name.length > 0) {
      const addData = async () => {
        const db = firebase.firestore();
        const newVote = { name: this.state.name, gender: this.state.genderSw };

        const votesRef = db.collection('votes');

        var query = await votesRef.where('name', '==', newVote.name).get();

        if (query.empty) {
          votesRef.add(newVote).then(() => {
            this.setState({
              votes: [newVote, ...this.state.votes],
              name: '',
              genderSw: true
            });
          });
        } else {
          this.setState({ nameError: true });
        }
      };
      addData();
    } else {
      this.setState({ nameError: true });
    }
  };

  getTimeStampAndGender = () => {
    const db = firebase.firestore();
    let timeStamp = '';
    let gender = '';
    db.collection('couple-details')
      .limit(1)
      .get()
      .then(querySnapshot => {
        const doc = querySnapshot.docs[0];
        timeStamp = moment
          .unix(doc.data().endDate.seconds)
          .format('YYYY-MM-DD HH:mm:ss');
        gender = doc.data().realGender;
        this.setState({
          endTimeStamp: timeStamp,
          realGender: gender,
          isLoading: false
        });
      });

    this.timer = setInterval(() => {
      let time = moment(Date.now()).countdown(timeStamp);

      if (time.value > 500) {
        this.setState({
          timeLeft: `תסתיים בעוד ${time.toString()}`
        });
      } else {
        this.setState({
          timeLeft: `הסתיימה, מזל טוב! 💖`
        });
      }
    }, 1);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ nameError: false });
  };

  render() {
    let time = moment(Date.now()).countdown(this.state.endTimeStamp);
    if (time.value < 500) {
      clearInterval(this.timer);
    }
    return (
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <StylesProvider jss={jss}>
          <div className='App'>
            <div className='Header'>
              <div
                style={{
                  fontSize: '1.2rem',
                  textShadow: '2px 2px 5px gray'
                }}
              >
                אז למי שני ולירון מצפים?
              </div>
              <img
                className='babies'
                style={{ width: '50%' }}
                src={require('../src/images/boy-girl.png')}
                alt='Logo'
              />
              <div>
                <span style={{ color: '#69C3FF' }}>בן </span>
                {'או '}
                <span style={{ color: '#E281AB' }}>בת? </span>
              </div>
            </div>
            {this.state.isLoading ? (
              <div className='Content'>
                <CircularProgress />
              </div>
            ) : (
              <div className='Content'>
                {time.value > 500 ? (
                  <>
                    <div style={{ textShadow: '2px 2px 5px gray' }}>
                      יאללה, גם את/ה מוזמן/ת לנחש :)
                    </div>
                    <form
                      className='name-form'
                      onSubmit={this.handleSubmit}
                      noValidate
                      autoComplete='off'
                    >
                      <TextField
                        id='outlined-basic'
                        label='שם מלא'
                        variant='outlined'
                        size='small'
                        style={{ margin: '1vh' }}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        error={this.state.nameError}
                      />
                      <FormControlLabel
                        style={{ marginRight: -10, marginLeft: 0 }}
                        control={
                          <GenderSwitch
                            checked={this.state.genderSw}
                            onChange={this.handleSwChange}
                            value='checkedA'
                          />
                        }
                        label={
                          <Typography
                            style={{
                              color: this.state.genderSw
                                ? '#69C3FF'
                                : '#E281AB',
                              fontWeight: 'bold'
                            }}
                          >
                            {this.state.genderSw ? 'בן' : 'בת'}
                          </Typography>
                        }
                        labelPlacement='top'
                      />
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={this.handleSubmit}
                        type='submit'
                      >
                        שלח
                      </Button>
                    </form>
                  </>
                ) : (
                  <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    style={{
                      alignSelf: 'center',
                      width: '40vw',
                      margin: '3%'
                    }}
                    endIcon={
                      this.state.showWinners ? (
                        <ArrowBackIosIcon />
                      ) : (
                        <EmojiEvents />
                      )
                    }
                    onClick={() =>
                      this.setState({
                        showWinners: !this.state.showWinners
                      })
                    }
                  >
                    {this.state.showWinners ? 'חזרה' : 'צפה בזוכים'}
                  </Button>
                )}
                <List
                  style={{
                    // height: '100%',
                    height: time.value < 500 ? '45vh' : '40vh',
                    overflow: 'auto'
                  }}
                  dense={true}
                >
                  {this.state.isLoading || time.value < 500 ? (
                    <div
                      style={{
                        textAlign: 'center',
                        // flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        flexDirection: 'column'
                      }}
                    >
                      {this.state.isLoading && <CircularProgress />}
                      {time.value < 500 &&
                        (this.state.showWinners ? (
                          <List
                            style={{
                              height: '100%',
                              maxWidth: '90%'
                            }}
                          >
                            {this.state.votes
                              .filter(
                                vote =>
                                  vote.gender ===
                                  (this.state.realGender === 'boy')
                              )
                              .map((vote, i) => (
                                <ListItem key={i}>
                                  <ListItemText
                                    primaryTypographyProps={{
                                      style: {
                                        fontWeight: 'bold',
                                        color: '#8566BA',
                                        marginRight: '10%'
                                      }
                                    }}
                                    primary={vote.name}
                                    secondary={null}
                                  />
                                  <ListItemIcon
                                    style={{
                                      // flex: 1,
                                      // paddingLeft: 15,
                                      justifyContent: 'flex-end'
                                    }}
                                  >
                                    <>
                                      <Typography
                                        style={{
                                          color: vote.gender
                                            ? '#69C3FF'
                                            : '#E281AB',
                                          fontWeight: 'bold',
                                          marginLeft: 5
                                        }}
                                      >
                                        {vote.gender ? 'בן' : 'בת'}
                                      </Typography>
                                      <ChildCareTwoToneIcon
                                        style={{
                                          color: vote.gender
                                            ? '#69C3FF'
                                            : '#E281AB'
                                        }}
                                      />
                                    </>
                                  </ListItemIcon>
                                </ListItem>
                              ))}
                          </List>
                        ) : (
                          <img
                            style={{
                              maxWidth: '70%'
                            }}
                            src={require(`../src/images/itsa${this.state.realGender}.png`)}
                            alt='Logo'
                          />
                        ))}
                    </div>
                  ) : this.state.votes.length > 0 ? (
                    this.state.votes.map((vote, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            style: {
                              fontWeight: 'bold',
                              color: '#8566BA'
                            }
                          }}
                          primary={vote.name}
                          secondary={null}
                        />
                        <ListItemIcon
                          style={{
                            flex: 1,
                            paddingLeft: 15,
                            justifyContent: 'flex-end'
                          }}
                        >
                          <>
                            <Typography
                              style={{
                                color: vote.gender ? '#69C3FF' : '#E281AB',
                                fontWeight: 'bold',
                                marginLeft: 5
                              }}
                            >
                              {vote.gender ? 'בן' : 'בת'}
                            </Typography>
                            <ChildCareTwoToneIcon
                              style={{
                                color: vote.gender ? '#69C3FF' : '#E281AB'
                              }}
                            />
                          </>
                        </ListItemIcon>
                      </ListItem>
                    ))
                  ) : (
                    <ListItem
                      style={{
                        textAlign: 'center',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                      }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          style: {
                            fontWeight: 'bold',
                            color: '#8566BA'
                          }
                        }}
                        primary='עדיין אין הצבעות...'
                        secondary={null}
                      />
                    </ListItem>
                  )}
                </List>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8566BA',
                flex: '1'
              }}
            >
              <p style={{ margin: 0 }}>
                {this.state.isLoading ? '' : '⏰ ההצבעה ' + this.state.timeLeft}
              </p>
            </div>
          </div>
          <Snackbar
            open={this.state.nameError}
            autoHideDuration={6000}
            onClose={this.handleSnackClose}
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
          >
            <Alert onClose={this.handleSnackClose} severity='error'>
              שם כבר קיים או לא תקין!
            </Alert>
          </Snackbar>
        </StylesProvider>
      </ThemeProvider>
    );
  }
}

export default App;
