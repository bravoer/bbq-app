export default function transitions() {
  this.transition(
    this.hasClass('vehicles'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('toDown'),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toUp')
  );

  this.transition(
    this.toRoute('subscribed'),
    this.use('toLeft')
  );
}
