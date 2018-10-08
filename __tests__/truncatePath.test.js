import truncatePath from '../src'

const PATH_LIMIT = 40

describe('Should return correct line of text', () => {
  it('Should return path with no line number when space premits', () => {
    const res = truncatePath('dir/dir/filename.js', PATH_LIMIT)
    expect(res).toBe('dir/dir/filename.js')
  })

  it('Should return string path with multi extentions', () => {
    const res = truncatePath('dir/dir/filename.min.js', PATH_LIMIT)
    expect(res).toBe('dir/dir/filename.min.js')
  })

  it('Should return only filename', () => {
    const res = truncatePath('/src/long-directory-name/another-even-longer-directory-name/someKindOfIncrediblyLongFilename.js', PATH_LIMIT)
    expect(res).toBe('.../someKindOfIncrediblyLongFilename.js')
  })

  it('Should return only truncated filename', () => {
    const res = truncatePath('/src/long-directory-name/another-even-longer-directory-name/IJustWantedToBeOneOfTheStrokesNowLookAtTheMessYouMadeMeMake.js', PATH_LIMIT)
    expect(res).toBe('.../IJustWantedToBe...ssYouMadeMeMake.js')
  })

  it('Should return truncated path ', () => {
    const res = truncatePath('src/long-directory-name/another-even-longer-directory-name/filename.js', PATH_LIMIT)
    expect(res).toBe('src/.../filename.js')
  })

  it('Should return truncated path of a very long path', () => {
    const res = truncatePath('components/modules/src/main/java/com/project/plugin/connect/modules/beans/HookModuleBean.java', PATH_LIMIT)
    expect(res).toBe('components/.../beans/HookModuleBean.java')
  })

  it('Should correctly truncate hidden files without a line', () => {
    const res = truncatePath('components/modules/src/main/java/com/project/plugin/connect/modules/beans/.eslintignore', PATH_LIMIT)
    expect(res).toBe('components/.../beans/.eslintignore')
  })

  it('Should put path placeholder in front of truncated string', () => {
    const res = truncatePath('plugin/connect/modules/beans/filenameWhichIsSuperLongAndWayLongerThanItShouldBe.json', PATH_LIMIT)
    expect(res).toBe('.../filenameWhichI...ThanItShouldBe.json')
  })

  it('Should correctly handle filenames with `.` in them while result string is short', () => {
    const res = truncatePath('tests/functional/teststr_soo_tasty.teststr_environment.json', 27)

    expect(res).toBe('.../teststr_...ronment.json')
  })

  it('Should correctly handle filenames with `.` in them while result string is long', () => {
    const res = truncatePath('tests/functional/teststr_soo_tasty.teststr_environment.json', PATH_LIMIT)

    expect(res).toBe('.../teststr_soo_ta...tr_environment.json')
  })

  it('Should correctly handle filenames with a lot of `.` in them while result string is long', () => {
    const res = truncatePath('frontend/src/app/components/core/somerand_pathname/rand.somerand_filename.partofname.extent', 28)
    expect(res).toBe('.../rand.so...tofname.extent')
  })
})
