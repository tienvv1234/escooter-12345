export default {
    env: 'development',
    jwtSecret: '36bfd177-01ab-4b7e-9708-624dd7b50beb',
    db: 'postgresql://postgres:tien1991@localhost/testdatabase',
    port: 4200,
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
