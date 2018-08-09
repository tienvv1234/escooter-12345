export default {
    env: 'production',
    jwtSecret: '',
    db: '',
    port: 5432,
    passportOptions: {
        session: false,
    },
    radius: 10 / 6378, // where 10 Kms is used as radius to find nearby driver
    arrivedDistance: 200,
    arrivingDistance: 1000,
    limit: 10,
    skip: 0,
    tripFilter: 'All',
};
