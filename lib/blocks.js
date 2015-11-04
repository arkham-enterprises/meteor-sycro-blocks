Template['SycroBlocks'].onRendered(function () {
  let data = Template.currentData();

  this.$('.fullpage-wrapper').fullpage(_.extend(data, {
    sectionSelector: '.block-wrapper'
  }));
});
