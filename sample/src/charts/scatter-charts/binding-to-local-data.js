export class BindingToLocalData {

  pricePerformance = [ {
    'family': 'Pentium',
    'model': 'D 820',
    'price': 105,
    'performance': 100
  }, {
    'family': 'Pentium',
    'model': 'D 915',
    'price': 120,
    'performance': 102
  }, {
    'family': 'Pentium',
    'model': 'D 945',
    'price': 160,
    'performance': 118
  }, {
    'family': 'Pentium',
    'model': 'XE 965',
    'price': 1000,
    'performance': 137
  }, {
    'family': 'Core 2 Duo',
    'model': 'E6300',
    'price': 185,
    'performance': 134
  }, {
    'family': 'Core 2 Duo',
    'model': 'E6400',
    'price': 210,
    'performance': 143
  }, {
    'family': 'Core 2 Duo',
    'model': 'E6600',
    'price': 305,
    'performance': 163
  }, {
    'family': 'Core 2 Duo',
    'model': 'E6700',
    'price': 530,
    'performance': 177
  }, {
    'family': 'Core 2 Extreme',
    'model': 'X6800',
    'price': 1000,
    'performance': 190
  }, {
    'family': 'Athlon 64',
    'model': 'X2 3800+',
    'price': 148,
    'performance': 115
  }, {
    'family': 'Athlon 64',
    'model': 'X2 4200+',
    'price': 170,
    'performance': 125
  }, {
    'family': 'Athlon 64',
    'model': 'X2 4600+',
    'price': 205,
    'performance': 138
  }, {
    'family': 'Athlon 64',
    'model': 'X2 5000+',
    'price': 290,
    'performance': 143
  }, {
    'family': 'Athlon 64',
    'model': 'FX-62',
    'price': 800,
    'performance': 147
  } ];

  series = [{
    xField: 'price',
    yField: 'performance'
  }];

  xAxis = {
    max: 1000,
    labels: {
      format: '${0}'
    },
    title: {
      text: 'Price'
    }
  };

  yAxis = {
    min: 80,
    labels: {
      format: '{0}%'
    },
    title: {
      text: 'Performance Ratio'
    }
  };

  tooltip = {
    visible: true,
    template: '#= "<b>$" + value.x + " " + dataItem.family + " " + dataItem.model + ": " + value.y + "%</b>" #'
  }
}
