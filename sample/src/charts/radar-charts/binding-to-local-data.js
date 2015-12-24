export class BindingToLocalData {
  proteinData = [{
    name: 'Tryptophan',
    abbr: 'Trp',
    score: 3
  }, {
    name: 'Threonine',
    abbr: 'Thr',
    score: 4
  }, {
    name: 'Isoleucine',
    abbr: 'Iso',
    score: 5
  }, {
    name: 'Leucine',
    abbr: 'Leu',
    score: 5
  }, {
    name: 'Lysine',
    abbr: 'Lys',
    score: 5
  }, {
    name: 'Methionine + Cystine',
    abbr: 'M+C',
    score: 2
  }, {
    name: 'Phenylalanine + Tyrosine',
    abbr: 'p+T',
    score: 3
  }, {
    name: 'Valine',
    abbr: 'Val',
    score: 5
  }, {
    name: 'Histidine',
    abbr: 'Hys',
    score: 4
  }];

  series = [{
    name: 'Proteins',
    type: 'radarColumn',
    field: 'score'
  }];
}
