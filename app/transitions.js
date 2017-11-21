export default function(){
  this.transition(
    this.fromRoute('project'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
