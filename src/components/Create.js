import {useEffect, useState} from 'react';
import Navbar from './Navbar';
// import '../styles/create.module.css';
import useWindowDimensions from './Width';
import NavMob from './NavbarMobile';
import {makeStyles} from '@mui/styles';

const styles = makeStyles({
    contCreate: {
        width: '100%',
        color: '#333333',
    },
    headerCreate: {
        display: 'flex',
        width: '95%',
        margin: 'auto',
        padding: '1rem 0',
        '& p': {
            margin: '0',
            display: 'flex',
            alignItems: 'center',
        },
    },
    btnCreate: {
        backgroundColor: '#366ef1',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        height: '2rem',
        padding: '0 1rem',
        fontSize: '0.8rem',
        fontWeight: '600',
    },
    dropdownCreate: {
        position: 'absolute',
        width: '100%',
        height: '14rem',
        top: '105%',
        left: '0rem',
        borderRadius: '10px',
        padding: '0.5rem',
        backgroundColor: '#fff',
        boxShadow: '0px 26px 81px #33333350',
        zIndex: '100',
        '& button': {
            border: 'none',
            color: '#333333',
            backgroundColor: '#fff',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
        },
    },
    scrollCreate: {
        height: '75%',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarColor: '#0670ed #004cff38',
        '& input': {
            display: 'none',
            '& :checked + label': {
                backgroundColor: '#eceef1',
            },
            '& :checked + label span:last-child': {
                opacity: 1,
            },
        },
        '& label': {
            fontSize: '1rem',
            padding: '0.3rem 0.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: '400',
            borderRadius: '4px',
            '& :hover': {
                backgroundColor: '#eceef1',
            },
            '& span:nth-child(2)': {
                opacity: 0,
            },
        },
    },
    bodyCreate: {
        width: '95%',
        margin: 'auto',
    },
    firstCreate: {
        width: '100%',
        padding: '1rem 3rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        '& :hover': {
            boxShadow: '0px 26px 81px #33333310',
        },
    },
    form1Create: {
        width: '70%',
        '@media (max-width:1200px)': {
            width: '80%',
        },
        '@media (max-width:1000px)': {
            width: '100%',
        },
    },
    secondCreate: {
        width: '100%',
        padding: '1rem 3rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        margin: '1.5rem 0',
        '& :hover': {
            boxShadow: '0px 26px 81px #33333310',
        },
    },
    form2Create: {
        width: '100%',
        display: 'flex',
        columnGap: '1rem',
        flexWrap: 'wrap',
    },
    textCreate: {
        // minWidth: '10rem',
        flex: 1,
        minWidth: '15rem',
        margin: '1rem 0',
        '& label': {
            display: 'block',
            fontSize: '0.8rem',
        },
        '& input': {
            display: 'block',
            height: '2rem',
            minWidth: '15rem',
            /* width: 100%; */
            border: '1px solid #33333350',
            outline: 'none',
            padding: '0.5rem',
            '& :hover': {
                border: '1px solid #33333380',
            },
            '& ::placeholder': {
                color: '#33333380',
            },
        },
    },
    submitCreate: {
        width: '100%',
        margin: '1.5rem 0',
        marginBottom: '3rem',
        display: 'flex',
        columnGap: '1rem',
        justifyContent: 'flex-end',
        '& button': {
            border: 'none',
            height: '2.5rem',
            fontSize: '1rem',
            padding: '0 1rem',
            borderRadius: '8px',
            backgroundColor: '#f4f4f9',
        },
    },
    form1DivCreate: {
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: '0.5rem',
        display: 'flex',
        '@media (max-width:800px)': {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'left',
            rowGap: '1rem',
            '& div': {
                width: '100%',
            },
        },
    },
    headerLeftCreate: {
        '@media (max-width:800px)': {
            flexDirection: 'column',
            rowGap: '0.5rem',
        },
    },
});

const Create = () => {
    const classes = styles();
    const {height, width} = useWindowDimensions();
    const [role, setRole] = useState(false);
    const [who, setWho] = useState('Publisher');
    const [t1, sett1] = useState('');
    const [qty, setQty] = useState(0);
    const [prod, setprod] = useState('select');
    const [chooseProd, setChooseProd] = useState(false);
    const [ready, setReady] = useState(false);
    const [sameAdd, setSameAdd] = useState(false);
    const [name, setName] = useState('');
    const [email, setmail] = useState('');
    const [ph, setph] = useState('');
    const [add, setAdd] = useState('');
    const [ph2, setph2] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState('');
    const [city, setCity] = useState('');
    const [name2, setName2] = useState('');
    const [email2, setmail2] = useState('');
    const [ph_2, setph_2] = useState('');
    const [add2, setAdd2] = useState('');
    const [ph22, setph22] = useState('');
    const [state2, setState2] = useState('');
    const [pin2, setPin2] = useState('');
    const [city2, setCity2] = useState('');

    const checkAdd = () => {
        var check = document.getElementById('sameAddress');
        console.log(check);
        if (check.checked) {
            setSameAdd(true);
        } else {
            setSameAdd(false);
        }
    };

    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <div className={classes.contCreate}>
            {ready && width >= 800 && <Navbar/>}
            {ready && width < 800 && <NavMob width={width}/>}
            <div className={classes.headerCreate}>
                <p
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: '600',
                        color: '#333333',
                        flex: 1,
                    }}
                >
                    Create Orders
                </p>
                <p
                    className={classes.headerLeftCreate}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        columnGap: '1rem',
                    }}
                >
                    <p
                        style={{
                            height: '2rem',
                            background: '#fff',
                            padding: '0 0.5rem',
                            borderRadius: '8px',
                            display: 'flex',
                            alignContent: 'center',
                            width: '10rem',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            position: 'relative',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>{who}</span>
                        <span>
							<span
                                onClick={() => {
                                    if (role) {
                                        setRole(false);
                                    } else {
                                        setRole(true);
                                    }
                                }}
                                style={{
                                    backgroundColor: '#366EF1',
                                    padding: '0 0.3rem',
                                    paddingTop: '0.1rem',
                                    borderRadius: '5px',
                                }}
                            >
								<svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='11'
                                    height='11'
                                    viewBox='0 0 24 24'
                                >
									<path
                                        d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
                                        fill='#fff'
                                    />
								</svg>
							</span>
						</span>
                        {role && (
                            <div className={classes.dropdownCreate}>
                                <p
                                    style={{
                                        justifyContent: 'center',
                                        fontWeight: '400',
                                        borderBottom: '1px solid #E4E4E4',
                                    }}
                                >
                                    Choose Product
                                </p>
                                <div className={classes.scrollCreate}>
                                    <input
                                        type='radio'
                                        name='header'
                                        id='h1'
                                        value='Pending'
                                        onChange={(e) => sett1(e.target.value)}
                                    />
                                    <label htmlFor='h1'>
                                        <span>Pending</span>
                                        <span
                                            style={{
                                                height: '1.2rem',
                                                width: '1.2rem',

                                                position: 'relative',
                                                display: 'inline-block',
                                            }}
                                        >
											<svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 16 16'
                                            >
												<path
                                                    id='check_box'
                                                    data-name='check box'
                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                    transform='translate(-4.5 -4.5)'
                                                    fill='#366ef1'
                                                />
											</svg>
										</span>
                                    </label>
                                    <input
                                        type='radio'
                                        name='header'
                                        id='h2'
                                        value='Confirmed'
                                        onChange={(e) => sett1(e.target.value)}
                                    />
                                    <label htmlFor='h2'>
                                        <span>Confirmed</span>
                                        <span
                                            style={{
                                                height: '1.2rem',
                                                width: '1.2rem',

                                                position: 'relative',
                                                display: 'inline-block',
                                            }}
                                        >
											<svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 16 16'
                                            >
												<path
                                                    id='check_box'
                                                    data-name='check box'
                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                    transform='translate(-4.5 -4.5)'
                                                    fill='#366ef1'
                                                />
											</svg>
										</span>
                                    </label>
                                    <input
                                        type='radio'
                                        name='header'
                                        id='h3'
                                        value='Delivered'
                                        onChange={(e) => sett1(e.target.value)}
                                    />
                                    <label htmlFor='h3'>
                                        <span>Delivered</span>
                                        <span
                                            style={{
                                                height: '1.2rem',
                                                width: '1.2rem',

                                                position: 'relative',
                                                display: 'inline-block',
                                            }}
                                        >
											<svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 16 16'
                                            >
												<path
                                                    id='check_box'
                                                    data-name='check box'
                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                    transform='translate(-4.5 -4.5)'
                                                    fill='#366ef1'
                                                />
											</svg>
										</span>
                                    </label>
                                    <input
                                        type='radio'
                                        name='header'
                                        id='h4'
                                        value='In Transit'
                                        onChange={(e) => sett1(e.target.value)}
                                    />
                                    <label htmlFor='h4'>
                                        <span>In Transit</span>
                                        <span
                                            style={{
                                                height: '1.2rem',
                                                width: '1.2rem',

                                                position: 'relative',
                                                display: 'inline-block',
                                            }}
                                        >
											<svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 16 16'
                                            >
												<path
                                                    id='check_box'
                                                    data-name='check box'
                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                    transform='translate(-4.5 -4.5)'
                                                    fill='#366ef1'
                                                />
											</svg>
										</span>
                                    </label>
                                    <input
                                        type='radio'
                                        name='header'
                                        id='h5'
                                        value='Undelivered'
                                        onChange={(e) => sett1(e.target.value)}
                                    />
                                    <label htmlFor='h5'>
                                        <span>Undelivered</span>
                                        <span
                                            style={{
                                                height: '1.2rem',
                                                width: '1.2rem',

                                                position: 'relative',
                                                display: 'inline-block',
                                            }}
                                        >
											<svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 16 16'
                                            >
												<path
                                                    id='check_box'
                                                    data-name='check box'
                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                    transform='translate(-4.5 -4.5)'
                                                    fill='#366ef1'
                                                />
											</svg>
										</span>
                                    </label>
                                    <input
                                        type='radio'
                                        name='header'
                                        id='h6'
                                        value='opt #6'
                                        onChange={(e) => sett1(e.target.value)}
                                    />
                                    <label htmlFor='h6'>
                                        <span>Opt #6</span>
                                        <span
                                            style={{
                                                height: '1.2rem',
                                                width: '1.2rem',

                                                position: 'relative',
                                                display: 'inline-block',
                                            }}
                                        >
											<svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 16 16'
                                            >
												<path
                                                    id='check_box'
                                                    data-name='check box'
                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                    transform='translate(-4.5 -4.5)'
                                                    fill='#366ef1'
                                                />
											</svg>
										</span>
                                    </label>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignContent: 'center',
                                        marginTop: '0.8rem',
                                        columnGap: '0.3rem',
                                    }}
                                >
                                    <button
                                        onClick={() => {
                                            setWho(t1);
                                            sett1('');
                                            setRole(false);
                                        }}
                                        style={{backgroundColor: '#366EF1', color: '#fff'}}
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => {
                                            setRole(false);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </p>
                    <p>
                        <button className={classes.btnCreate}>New Order</button>
                    </p>
                </p>
            </div>
            <div className={classes.bodyCreate}>
                <div className={classes.firstCreate}>
                    <p
                        style={{display: 'flex', columnGap: '1rem', alignItems: 'center'}}
                    >
						<span
                            style={{
                                borderRadius: '50%',
                                backgroundColor: '#366EF1',
                                padding: '0.2rem 0',
                                color: '#fff',
                                display: 'inline-block',
                                width: '1.7rem',
                                height: '1.7rem',
                                textAlign: 'center',
                            }}
                        >
							1
						</span>
                        <span style={{fontSize: '1.4rem', fontWeight: '600'}}>
							Product Details
						</span>
                    </p>
                    <div>
                        <div className={classes.form1Create}>
                            <div
                                className={classes.form1DivCreate}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    columnGap: '0.5rem',
                                    display: 'flex',
                                }}
                            >
                                <div
                                    className={classes.firstDivCreate}
                                    style={{
                                        margin: 0,
                                        flex: '2',
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: '0',
                                            fontSize: '0.8rem',
                                            marginBottom: '0.1rem',
                                        }}
                                    >
                                        Select Product
                                    </p>
                                    <p
                                        style={{
                                            height: '100%',
                                            padding: '0.35rem 0.5rem',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            margin: 0,
                                            alignContent: 'center',
                                            borderRadius: '4px',
                                            width: '90%',
                                            border: `${
                                                chooseProd ? '1px solid #0670ed' : '1px solid #33333350'
                                            }`,
                                            position: 'relative',
                                        }}
                                    >
                                        <span>{prod}</span>
                                        <span>
											<span
                                                onClick={() => {
                                                    if (!chooseProd) setChooseProd(true);
                                                    else setChooseProd(false);
                                                }}
                                                style={{
                                                    height: '100%',
                                                    width: '1.5rem',
                                                    backgroundColor: '#366ef1',
                                                    color: '#fff',
                                                    display: 'block',
                                                    textAlign: 'center',
                                                    borderRadius: '4px',
                                                    paddingBottom: '0.1rem',
                                                    cursor: 'pointer',
                                                }}
                                            >
												{chooseProd ? '-' : '+'}
											</span>
										</span>
                                        {chooseProd && (
                                            <div
                                                style={{height: '16rem'}}
                                                className={classes.dropdownCreate}
                                            >
                                                <p
                                                    style={{
                                                        justifyContent: 'center',
                                                        fontWeight: '400',
                                                        borderBottom: '1px solid #E4E4E4',
                                                    }}
                                                >
                                                    Choose Product
                                                </p>
                                                <div
                                                    className={classes.scrollCreate}
                                                    style={{height: '60%'}}
                                                >
                                                    <input
                                                        type='radio'
                                                        name='form1'
                                                        id='f1'
                                                        value='Pending'
                                                        onChange={(e) => sett1(e.target.value)}
                                                    />
                                                    <label htmlFor='f1'>
                                                        <span>Pending</span>
                                                        <span
                                                            style={{
                                                                height: '1.2rem',
                                                                width: '1.2rem',

                                                                position: 'relative',
                                                                display: 'inline-block',
                                                            }}
                                                        >
															<svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='14'
                                                                height='14'
                                                                viewBox='0 0 16 16'
                                                            >
																<path
                                                                    id='check_box'
                                                                    data-name='check box'
                                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                                    transform='translate(-4.5 -4.5)'
                                                                    fill='#366ef1'
                                                                />
															</svg>
														</span>
                                                    </label>
                                                    <input
                                                        type='radio'
                                                        name='form1'
                                                        id='f2'
                                                        value='Confirmed'
                                                        onChange={(e) => sett1(e.target.value)}
                                                    />
                                                    <label htmlFor='f2'>
                                                        <span>Confirmed</span>
                                                        <span
                                                            style={{
                                                                height: '1.2rem',
                                                                width: '1.2rem',

                                                                position: 'relative',
                                                                display: 'inline-block',
                                                            }}
                                                        >
															<svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='14'
                                                                height='14'
                                                                viewBox='0 0 16 16'
                                                            >
																<path
                                                                    id='check_box'
                                                                    data-name='check box'
                                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                                    transform='translate(-4.5 -4.5)'
                                                                    fill='#366ef1'
                                                                />
															</svg>
														</span>
                                                    </label>
                                                    <input
                                                        type='radio'
                                                        name='form1'
                                                        id='f3'
                                                        value='Delivered'
                                                        onChange={(e) => sett1(e.target.value)}
                                                    />
                                                    <label htmlFor='f3'>
                                                        <span>Delivered</span>
                                                        <span
                                                            style={{
                                                                height: '1.2rem',
                                                                width: '1.2rem',
                                                                position: 'relative',
                                                                display: 'inline-block',
                                                            }}
                                                        >
															<svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='14'
                                                                height='14'
                                                                viewBox='0 0 16 16'
                                                            >
																<path
                                                                    id='check_box'
                                                                    data-name='check box'
                                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                                    transform='translate(-4.5 -4.5)'
                                                                    fill='#366ef1'
                                                                />
															</svg>
														</span>
                                                    </label>
                                                    <input
                                                        type='radio'
                                                        name='form1'
                                                        id='f4'
                                                        value='In Transit'
                                                        onChange={(e) => sett1(e.target.value)}
                                                    />
                                                    <label htmlFor='f4'>
                                                        <span>In Transit</span>
                                                        <span
                                                            style={{
                                                                height: '1.2rem',
                                                                width: '1.2rem',
                                                                position: 'relative',
                                                                display: 'inline-block',
                                                            }}
                                                        >
															<svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='14'
                                                                height='14'
                                                                viewBox='0 0 16 16'
                                                            >
																<path
                                                                    id='check_box'
                                                                    data-name='check box'
                                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                                    transform='translate(-4.5 -4.5)'
                                                                    fill='#366ef1'
                                                                />
															</svg>
														</span>
                                                    </label>
                                                    <input
                                                        type='radio'
                                                        name='form1'
                                                        id='f5'
                                                        value='Undelivered'
                                                        onChange={(e) => sett1(e.target.value)}
                                                    />
                                                    <label htmlFor='f5'>
                                                        <span>Undelivered</span>
                                                        <span
                                                            style={{
                                                                height: '1.2rem',
                                                                width: '1.2rem',

                                                                position: 'relative',
                                                                display: 'inline-block',
                                                            }}
                                                        >
															<svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='14'
                                                                height='14'
                                                                viewBox='0 0 16 16'
                                                            >
																<path
                                                                    id='check_box'
                                                                    data-name='check box'
                                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                                    transform='translate(-4.5 -4.5)'
                                                                    fill='#366ef1'
                                                                />
															</svg>
														</span>
                                                    </label>
                                                    <input
                                                        type='radio'
                                                        name='form1'
                                                        id='f6'
                                                        value='opt #6'
                                                        onChange={(e) => sett1(e.target.value)}
                                                    />
                                                    <label htmlFor='f6'>
                                                        <span>Opt #6</span>
                                                        <span
                                                            style={{
                                                                height: '1.2rem',
                                                                width: '1.2rem',

                                                                position: 'relative',
                                                                display: 'inline-block',
                                                            }}
                                                        >
															<svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='14'
                                                                height='14'
                                                                viewBox='0 0 16 16'
                                                            >
																<path
                                                                    id='check_box'
                                                                    data-name='check box'
                                                                    d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
                                                                    transform='translate(-4.5 -4.5)'
                                                                    fill='#366ef1'
                                                                />
															</svg>
														</span>
                                                    </label>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignContent: 'center',
                                                        marginTop: '0.8rem',
                                                        columnGap: '0.3rem',
                                                    }}
                                                >
                                                    <button
                                                        onClick={() => {
                                                            setprod(t1);
                                                            sett1('');
                                                            setChooseProd(false);
                                                        }}
                                                        style={{
                                                            backgroundColor: '#366EF1',
                                                            color: '#fff',
                                                        }}
                                                    >
                                                        Confirm
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            sett1('');
                                                            setChooseProd(false);
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        margin: '0',
                                        flex: '1',
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: '0',
                                            fontSize: '0.8rem',
                                            marginBottom: '0.1rem',
                                        }}
                                    >
                                        Quantity
                                    </p>
                                    <p
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '0.2rem',
                                            margin: '0',
                                            flex: '1',
                                        }}
                                    >
										<span
                                            onClick={() => {
                                                if (qty > 0) setQty(qty - 1);
                                            }}
                                            style={{
                                                width: '2rem',
                                                height: '2rem',
                                                border: `${
                                                    qty > 0 ? '1px solid #0670ed' : '1px solid #33333350'
                                                }`,
                                                display: 'grid',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                                fontSize: '2rem',
                                                paddingBottom: '0.1rem',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                color: `${qty > 0 ? '#0670ed' : '#33333350'}`,
                                                fontWeight: '700',
                                            }}
                                        >
											-
										</span>
                                        <span
                                            style={{
                                                width: '3rem',
                                                height: '2rem',
                                                border: '1px solid #33333350',
                                                display: 'grid',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '4px',
                                            }}
                                        >
											{qty}
										</span>
                                        <span
                                            onClick={() => setQty(qty + 1)}
                                            style={{
                                                width: '2rem',
                                                height: '2rem',
                                                border: '1px solid #0670ed',
                                                display: 'grid',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                                fontSize: '2rem',
                                                paddingBottom: '0.1rem',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                color: '#0670ed',
                                                fontWeight: '700',
                                            }}
                                        >
											+
										</span>
                                    </p>
                                </div>
                                <div style={{margin: '0', flex: '1'}}>
                                    <p
                                        style={{
                                            margin: '0',
                                            fontSize: '0.8rem',
                                            marginBottom: '0.1rem',
                                        }}
                                    >
                                        Cost
                                    </p>
                                    <p style={{margin: '0', flex: '1'}}>
										<span
                                            style={{
                                                border: '1px solid #33333350',
                                                padding: '0.3rem',
                                                borderRadius: '4px',
                                                display: 'inline-block',
                                            }}
                                        >
											$ 1000000
										</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.secondCreate}>
                    <p
                        style={{display: 'flex', columnGap: '1rem', alignItems: 'center'}}
                    >
						<span
                            style={{
                                borderRadius: '50%',
                                backgroundColor: '#366EF1',
                                padding: '0.2rem 0',
                                color: '#fff',
                                display: 'inline-block',
                                width: '1.7rem',
                                height: '1.7rem',
                                textAlign: 'center',
                            }}
                        >
							2
						</span>
                        <span style={{fontSize: '1.4rem', fontWeight: '600'}}>
							Billing Address
						</span>
                    </p>
                    <div className={classes.form2Create}>
                        <div className={classes.textCreate}>
                            <label htmlFor='name'>Full Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Eg. John Doe'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='mail'>Email Id</label>
                            <input
                                type='email'
                                name='mail'
                                id='mail'
                                placeholder='john_Doe@gmail.com'
                                onChange={(e) => setmail(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='num'>Phone No.</label>
                            <input
                                type='tel'
                                name='num'
                                id='num'
                                placeholder='1234567890'
                                onChange={(e) => setph(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='num2'>
                                Alternate Phone Number {`(Optional)`}
                            </label>
                            <input
                                type='tel'
                                name='num2'
                                id='num2'
                                placeholder='1234567890'
                                onChange={(e) => setph2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='add'>Address</label>
                            <input
                                type='text'
                                name='add'
                                id='add'
                                placeholder='H.No.-123/123 ...'
                                onChange={(e) => setAdd(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='city'>City</label>
                            <input
                                type='text'
                                name='city'
                                id='city'
                                placeholder='Agra'
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='pin'>Pin Code</label>
                            <input
                                type='text'
                                name='pin'
                                id='pin'
                                placeholder='123456'
                                onChange={(e) => setPin(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='state'>State</label>
                            <input
                                type='text'
                                name='state'
                                id='state'
                                placeholder='Haryana'
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.secondCreate}>
                    <p
                        style={{display: 'flex', columnGap: '1rem', alignItems: 'center'}}
                    >
						<span
                            style={{
                                borderRadius: '50%',
                                backgroundColor: '#366EF1',
                                padding: '0.2rem 0',
                                color: '#fff',
                                display: 'inline-block',
                                width: '1.7rem',
                                height: '1.7rem',
                                textAlign: 'center',
                            }}
                        >
							3
						</span>
                        <span style={{fontSize: '1.4rem', fontWeight: '600'}}>
							Shipping Address
						</span>
                        <span>
							<input
                                type='checkbox'
                                name='sameAddress'
                                id='sameAddress'
                                onChange={() => checkAdd()}
                            />
							<label style={{fontSize: '0.8rem'}} htmlFor='sameAddress'>
								Same as Billing Adress
							</label>
						</span>
                    </p>
                    <div className={classes.form2Create}>
                        <div className={classes.textCreate}>
                            <label htmlFor='name'>Full Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Eg. John Doe'
                                value={sameAdd ? name : name2}
                                onChange={(e) => setName2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='mail'>Email Id</label>
                            <input
                                type='email'
                                name='mail'
                                id='mail'
                                placeholder='john_Doe@gmail.com'
                                value={sameAdd ? email : email2}
                                onChange={(e) => setmail2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='num'>Phone No.</label>
                            <input
                                type='tel'
                                name='num'
                                id='num'
                                placeholder='1234567890'
                                value={sameAdd ? ph : ph_2}
                                onChange={(e) => setph_2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='num2'>
                                Alternate Phone Number {`(Optional)`}
                            </label>
                            <input
                                type='tel'
                                name='num2'
                                id='num2'
                                placeholder='1234567890'
                                value={sameAdd ? ph2 : ph22}
                                onChange={(e) => setph22(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='add'>Address</label>
                            <input
                                type='text'
                                name='add'
                                id='add'
                                placeholder='H.No.-123/123 ...'
                                value={sameAdd ? add : add2}
                                onChange={(e) => setAdd2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='city'>City</label>
                            <input
                                type='text'
                                name='city'
                                id='city'
                                placeholder='Agra'
                                value={sameAdd ? city : city2}
                                onChange={(e) => setCity2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='pin'>Pin Code</label>
                            <input
                                type='text'
                                name='pin'
                                id='pin'
                                placeholder='123456'
                                value={sameAdd ? pin : pin2}
                                onChange={(e) => setPin2(e.target.value)}
                            />
                        </div>
                        <div className={classes.textCreate}>
                            <label htmlFor='state'>State</label>
                            <input
                                type='text'
                                name='state'
                                id='state'
                                placeholder='Haryana'
                                value={sameAdd ? state : state2}
                                onChange={(e) => setState2(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.submitCreate}>
                    <button>Cancel</button>
                    <button style={{backgroundColor: '#0670ed', color: '#fff'}}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Create;
