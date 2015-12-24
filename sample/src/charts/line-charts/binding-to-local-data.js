export class BindingToLocalData {
  internetUsers = [{
    'country': 'United States',
    'year': '1994',
    'value': 4.9
  },
  {
    'country': 'United States',
    'year': '1995',
    'value': 9.2
  },
  {
    'country': 'United States',
    'year': '1996',
    'value': 16.4
  },
  {
    'country': 'United States',
    'year': '1997',
    'value': 21.6
  },
  {
    'country': 'United States',
    'year': '1998',
    'value': 30.1
  },
  {
    'country': 'United States',
    'year': '1999',
    'value': 35.9
  },
  {
    'country': 'United States',
    'year': '2000',
    'value': 43.1
  },
  {
    'country': 'United States',
    'year': '2001',
    'value': 49.2
  },
  {
    'country': 'United States',
    'year': '2002',
    'value': 59.0
  },
  {
    'country': 'United States',
    'year': '2003',
    'value': 61.9
  },
  {
    'country': 'United States',
    'year': '2004',
    'value': 65
  },
  {
    'country': 'United States',
    'year': '2005',
    'value': 68.3
  },
  {
    'country': 'United States',
    'year': '2006',
    'value': 69.2
  },
  {
    'country': 'United States',
    'year': '2007',
    'value': 75.3
  },
  {
    'country': 'United States',
    'year': '2008',
    'value': 74.2
  },
  {
    'country': 'United States',
    'year': '2009',
    'value': 71.2
  },
  {
    'country': 'United States',
    'year': '2010',
    'value': 74.2
  },
  {
    'country': 'United States',
    'year': '2011',
    'value': 78.2
  }];

  seriesDefaults = {
    type: 'line',
    labels: {
      visible: true,
      format: '{0}%',
      background: 'transparent'
    }
  };

  series = [{
    field: 'value',
    name: 'United States'
  }];

  valueAxis = {
    labels: {
      format: '{0}%'
    },
    line: {
      visible: false
    }
  };

  categoryAxis = {
    field: 'year',
    majorGridLines: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '${category} - ${value}%'
  };
}
