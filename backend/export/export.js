export default [
    {
        path: '/subscriptions',
        format: 'text/csv',
        query: `
PREFIX bravoer: <http://mu.semte.ch/vocabularies/ext/bravoer/>

SELECT ?naam ?aantal ?groenten WHERE {
  ?s a bravoer:Subscription ;
       bravoer:name ?naam ;
       bravoer:amount ?aantal .
  OPTIONAL { ?s bravoer:vegetable ?groenten }
} ORDER BY ?naam`
    }
];
