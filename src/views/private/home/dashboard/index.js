import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import TuneIcon from '@material-ui/icons/Tune';
import MapIcon from '@material-ui/icons/Map';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import Table from '../../../../components/table'
import Form from '../../../../components/form'
import Grid from '@material-ui/core/Grid';
const { Text, } = Typography;
const { Title } = Typography;
const drawerWidth = 250;
const menuItems = [
  { label: "Programacion", path: "/programation", icon: 1 },
  { label: "Gestion de operaciones", path: "/operations", icon: 2 },
  { label: "Perfiles", path: "/profils", icon: 3 },
  { label: "Roles", path: "/rols", icon: 4 },
  { label: "Usuarios", path: "/user", icon: 5 },
  { label: "Reportes", path: "/reports", icon: 6 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#449df2'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#fff'
  },
  menuButton: {
    color: 'blue'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'linear-gradient(0deg, rgba(61,25,183,1) 0%, rgba(96,146,228,1) 42%, rgba(96,146,228,1) 65%, rgba(68,157,242,1) 100%)',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: 'linear-gradient(0deg, rgba(61,25,183,1) 0%, rgba(96,146,228,1) 42%, rgba(96,146,228,1) 65%, rgba(68,157,242,1) 100%)',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', marginLeft: 73, }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Title level={4} style={{ color: 'blue', }} >
              Prueba Front-end
          </Title>
          </div>

          <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginRight: '5%', width: 200, alignItems: 'center' }}>
            <Avatar size={'small'} style={{ justifyContent: 'flex-end', alignItems: 'center', }} icon={<UserOutlined />} />
            <Text style={{ marginLeft: '5%', marginRight: '5%', fontSize: 10, display: 'flex', }} >Stevens Correa Rada</Text>
            <LogoutOutlined style={{ color: 'blue', marginLeft: '5%' }} />
          </div>

        </Toolbar>

      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton style={{ color: '#fff' }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((r,) => (
            <ListItem button key={r.label} style={{ color: '#fff' }}>
              <ListItemIcon onClick={() => console.log(r.label)}>
                {r.icon === 1 ? <MapIcon style={{ color: '#fff' }}></MapIcon>
                  : r.icon === 2 ? <FormatListBulletedIcon style={{ color: '#fff' }}></FormatListBulletedIcon>
                    : r.icon === 3 ? <TuneIcon style={{ color: '#fff' }}></TuneIcon>
                      : r.icon === 4 ? <BuildIcon style={{ color: '#fff' }}></BuildIcon>
                        : r.icon === 5 ? <PersonIcon style={{ color: '#fff' }}></PersonIcon>
                          : <NoteIcon style={{ color: '#fff' }}></NoteIcon>
                }
              </ListItemIcon>
              <ListItemText primary={r.label} />
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>

      <Grid style={{ backgroundColor: '#EFEEED', marginTop: '5%' }} container spacing={2}>
        <Grid item xs={12} lg={8}>

          <div style={{ backgroundColor: '#fff', borderRadius: 5, marginLeft: '2%', height: '100%' }}>
        
            <Table></Table>
          </div>

        </Grid>

        <Grid item xs={12} lg={4}>
          <div style={{ backgroundColor: '#fff', borderRadius: 5, marginLeft: '2%', width:'80%'}}>
            <div style={{ marginLeft: 70, flexDirection: 'row', display: 'flex', paddingTop:20, paddingBottom:10 }}>
              <PersonIcon style={{ color: "#5422b9" }}></PersonIcon> <samp style={{ marginLeft: 10, color: "#5422b9", marginTop: 3 }}> Filtrar Busqueda</samp>
            </div>
            <Form></Form>
          </div>

        </Grid>

      </Grid>

      
    </div >
  );
}