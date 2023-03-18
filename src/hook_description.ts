const HOOK_DESCRIPTION = {
	'applypatch-msg': `<div class="sect2">
	<h3 id="_applypatch_msg"><a class="anchor" href="https://git-scm.com/docs/githooks#_applypatch_msg"></a>applypatch-msg</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-am">git-am[1]</a>.  It takes a single
	parameter, the name of the file that holds the proposed commit
	log message.  Exiting with a non-zero status causes <code>git am</code> to abort
	before applying the patch.</p>
	</div>
	<div class="paragraph">
	<p>The hook is allowed to edit the message file in place, and can
	be used to normalize the message into some project standard
	format. It can also be used to refuse the commit after inspecting
	the message file.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>applypatch-msg</em> hook, when enabled, runs the
	<em>commit-msg</em> hook, if the latter is enabled.</p>
	</div>
	</div>`,
	'pre-applypatch': `<div class="sect2">
	<h3 id="_pre_applypatch"><a class="anchor" href="https://git-scm.com/docs/githooks#_pre_applypatch"></a>pre-applypatch</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-am">git-am[1]</a>.  It takes no parameter, and is
	invoked after the patch is applied, but before a commit is made.</p>
	</div>
	<div class="paragraph">
	<p>If it exits with non-zero status, then the working tree will not be
	committed after applying the patch.</p>
	</div>
	<div class="paragraph">
	<p>It can be used to inspect the current working tree and refuse to
	make a commit if it does not pass certain test.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>pre-applypatch</em> hook, when enabled, runs the
	<em>pre-commit</em> hook, if the latter is enabled.</p>
	</div>
	</div>`,
	'post-applypatch': `<div class="sect2">
	<h3 id="_post_applypatch"><a class="anchor" href="https://git-scm.com/docs/githooks#_post_applypatch"></a>post-applypatch</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-am">git-am[1]</a>.  It takes no parameter,
	and is invoked after the patch is applied and a commit is made.</p>
	</div>
	<div class="paragraph">
	<p>This hook is meant primarily for notification, and cannot affect
	the outcome of <code>git am</code>.</p>
	</div>
	</div>`,
	'pre-commit': `<div class="sect2">
	<h3 id="_pre_commit"><a class="anchor" href="https://git-scm.com/docs/githooks#_pre_commit"></a>pre-commit</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-commit">git-commit[1]</a>, and can be bypassed
	with the <code>--no-verify</code> option.  It takes no parameters, and is
	invoked before obtaining the proposed commit log message and
	making a commit.  Exiting with a non-zero status from this script
	causes the <code>git commit</code> command to abort before creating a commit.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>pre-commit</em> hook, when enabled, catches introduction
	of lines with trailing whitespaces and aborts the commit when
	such a line is found.</p>
	</div>
	<div class="paragraph">
	<p>All the <code>git commit</code> hooks are invoked with the environment
	variable <code>GIT_EDITOR=:</code> if the command will not bring up an editor
	to modify the commit message.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>pre-commit</em> hook, when enabled—​and with the
	<code>hooks.allownonascii</code> config option unset or set to false—​prevents
	the use of non-ASCII filenames.</p>
	</div>
	</div>`,
	'pre-merge-commit': `<div class="sect2">
	<h3 id="_pre_commit"><a class="anchor" href="https://git-scm.com/docs/githooks#_pre_commit"></a>pre-commit</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-commit">git-commit[1]</a>, and can be bypassed
	with the <code>--no-verify</code> option.  It takes no parameters, and is
	invoked before obtaining the proposed commit log message and
	making a commit.  Exiting with a non-zero status from this script
	causes the <code>git commit</code> command to abort before creating a commit.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>pre-commit</em> hook, when enabled, catches introduction
	of lines with trailing whitespaces and aborts the commit when
	such a line is found.</p>
	</div>
	<div class="paragraph">
	<p>All the <code>git commit</code> hooks are invoked with the environment
	variable <code>GIT_EDITOR=:</code> if the command will not bring up an editor
	to modify the commit message.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>pre-commit</em> hook, when enabled—​and with the
	<code>hooks.allownonascii</code> config option unset or set to false—​prevents
	the use of non-ASCII filenames.</p>
	</div>
	</div>`,
	'prepare-commit-msg': `<div class="sect2">
	<h3 id="_prepare_commit_msg"><a class="anchor" href="https://git-scm.com/docs/githooks#_prepare_commit_msg"></a>prepare-commit-msg</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-commit">git-commit[1]</a> right after preparing the
	default log message, and before the editor is started.</p>
	</div>
	<div class="paragraph">
	<p>It takes one to three parameters.  The first is the name of the file
	that contains the commit log message.  The second is the source of the commit
	message, and can be: <code>message</code> (if a <code>-m</code> or <code>-F</code> option was
	given); <code>template</code> (if a <code>-t</code> option was given or the
	configuration option <code>commit.template</code> is set); <code>merge</code> (if the
	commit is a merge or a <code>.git/MERGE_MSG</code> file exists); <code>squash</code>
	(if a <code>.git/SQUASH_MSG</code> file exists); or <code>commit</code>, followed by
	a commit object name (if a <code>-c</code>, <code>-C</code> or <code>--amend</code> option was given).</p>
	</div>
	<div class="paragraph">
	<p>If the exit status is non-zero, <code>git commit</code> will abort.</p>
	</div>
	<div class="paragraph">
	<p>The purpose of the hook is to edit the message file in place, and
	it is not suppressed by the <code>--no-verify</code> option.  A non-zero exit
	means a failure of the hook and aborts the commit.  It should not
	be used as replacement for pre-commit hook.</p>
	</div>
	<div class="paragraph">
	<p>The sample <code>prepare-commit-msg</code> hook that comes with Git removes the
	help message found in the commented portion of the commit template.</p>
	</div>
	</div>`,
	'commit-msg': `<div class="sect2">
	<h3 id="_commit_msg"><a class="anchor" href="https://git-scm.com/docs/githooks#_commit_msg"></a>commit-msg</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-commit">git-commit[1]</a> and <a href="https://git-scm.com/docs/git-merge">git-merge[1]</a>, and can be
	bypassed with the <code>--no-verify</code> option.  It takes a single parameter,
	the name of the file that holds the proposed commit log message.
	Exiting with a non-zero status causes the command to abort.</p>
	</div>
	<div class="paragraph">
	<p>The hook is allowed to edit the message file in place, and can be used
	to normalize the message into some project standard format. It
	can also be used to refuse the commit after inspecting the message
	file.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>commit-msg</em> hook, when enabled, detects duplicate
	<code>Signed-off-by</code> trailers, and aborts the commit if one is found.</p>
	</div>
	</div>`,
	'post-commit': `<div class="sect2">
	<h3 id="_post_commit"><a class="anchor" href="https://git-scm.com/docs/githooks#_post_commit"></a>post-commit</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-commit">git-commit[1]</a>. It takes no parameters, and is
	invoked after a commit is made.</p>
	</div>
	<div class="paragraph">
	<p>This hook is meant primarily for notification, and cannot affect
	the outcome of <code>git commit</code>.</p>
	</div>
	</div>`,
	'pre-rebase': `<div class="sect2">
	<h3 id="_pre_rebase"><a class="anchor" href="https://git-scm.com/docs/githooks#_pre_rebase"></a>pre-rebase</h3>
	<div class="paragraph">
	<p>This hook is called by <a href="https://git-scm.com/docs/git-rebase">git-rebase[1]</a> and can be used to prevent a
	branch from getting rebased.  The hook may be called with one or
	two parameters.  The first parameter is the upstream from which
	the series was forked.  The second parameter is the branch being
	rebased, and is not set when rebasing the current branch.</p>
	</div>
	</div>`,
	'post-checkout': `<div class="sect2">
	<h3 id="_post_checkout"><a class="anchor" href="https://git-scm.com/docs/githooks#_post_checkout"></a>post-checkout</h3>
	<div class="paragraph">
	<p>This hook is invoked when a <a href="https://git-scm.com/docs/git-checkout">git-checkout[1]</a> or
	<a href="https://git-scm.com/docs/git-switch">git-switch[1]</a> is run after having updated the
	worktree.  The hook is given three parameters: the ref of the previous HEAD,
	the ref of the new HEAD (which may or may not have changed), and a flag
	indicating whether the checkout was a branch checkout (changing branches,
	flag=1) or a file checkout (retrieving a file from the index, flag=0).
	This hook cannot affect the outcome of <code>git switch</code> or <code>git checkout</code>,
	other than that the hook’s exit status becomes the exit status of
	these two commands.</p>
	</div>
	<div class="paragraph">
	<p>It is also run after <a href="https://git-scm.com/docs/git-clone">git-clone[1]</a>, unless the <code>--no-checkout</code> (<code>-n</code>) option is
	used. The first parameter given to the hook is the null-ref, the second the
	ref of the new HEAD and the flag is always 1. Likewise for <code>git worktree add</code>
	unless <code>--no-checkout</code> is used.</p>
	</div>
	<div class="paragraph">
	<p>This hook can be used to perform repository validity checks, auto-display
	differences from the previous HEAD if different, or set working dir metadata
	properties.</p>
	</div>
	</div>`,
	'post-merge': `<div class="sect2">
	<h3 id="_post_merge"><a class="anchor" href="https://git-scm.com/docs/githooks#_post_merge"></a>post-merge</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-merge">git-merge[1]</a>, which happens when a <code>git pull</code>
	is done on a local repository.  The hook takes a single parameter, a status
	flag specifying whether or not the merge being done was a squash merge.
	This hook cannot affect the outcome of <code>git merge</code> and is not executed,
	if the merge failed due to conflicts.</p>
	</div>
	<div class="paragraph">
	<p>This hook can be used in conjunction with a corresponding pre-commit hook to
	save and restore any form of metadata associated with the working tree
	(e.g.: permissions/ownership, ACLS, etc).  See contrib/hooks/setgitperms.perl
	for an example of how to do this.</p>
	</div>
	</div>`,
	'pre-push': `<div class="sect2">
	<h3 id="_pre_push"><a class="anchor" href="https://git-scm.com/docs/githooks#_pre_push"></a>pre-push</h3>
	<div class="paragraph">
	<p>This hook is called by <a href="https://git-scm.com/docs/git-push">git-push[1]</a> and can be used to prevent
	a push from taking place.  The hook is called with two parameters
	which provide the name and location of the destination remote, if a
	named remote is not being used both values will be the same.</p>
	</div>
	<div class="paragraph">
	<p>Information about what is to be pushed is provided on the hook’s standard
	input with lines of the form:</p>
	</div>
	<div class="literalblock">
	<div class="content">
	<pre>&lt;local ref&gt; SP &lt;local object name&gt; SP &lt;remote ref&gt; SP &lt;remote object name&gt; LF</pre>
	</div>
	</div>
	<div class="paragraph">
	<p>For instance, if the command <code>git push origin master:foreign</code> were run the
	hook would receive a line like the following:</p>
	</div>
	<div class="literalblock">
	<div class="content">
	<pre>refs/heads/master 67890 refs/heads/foreign 12345</pre>
	</div>
	</div>
	<div class="paragraph">
	<p>although the full object name would be supplied.  If the foreign ref does not
	yet exist the <code>&lt;remote object name&gt;</code> will be the all-zeroes object name.  If a
	ref is to be deleted, the <code>&lt;local ref&gt;</code> will be supplied as <code>(delete)</code> and the
	<code>&lt;local object name&gt;</code> will be the all-zeroes object name.  If the local commit
	was specified by something other than a name which could be expanded (such as
	<code>HEAD~</code>, or an object name) it will be supplied as it was originally given.</p>
	</div>
	<div class="paragraph">
	<p>If this hook exits with a non-zero status, <code>git push</code> will abort without
	pushing anything.  Information about why the push is rejected may be sent
	to the user by writing to standard error.</p>
	</div>
	</div>`,
	'pre-receive': `<div class="sect2">
	<h3 id="pre-receive"><a class="anchor" href="https://git-scm.com/docs/githooks#pre-receive"></a>pre-receive</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-receive-pack">git-receive-pack[1]</a> when it reacts to
	<code>git push</code> and updates reference(s) in its repository.
	Just before starting to update refs on the remote repository, the
	pre-receive hook is invoked.  Its exit status determines the success
	or failure of the update.</p>
	</div>
	<div class="paragraph">
	<p>This hook executes once for the receive operation. It takes no
	arguments, but for each ref to be updated it receives on standard
	input a line of the format:</p>
	</div>
	<div class="literalblock">
	<div class="content">
	<pre>&lt;old-value&gt; SP &lt;new-value&gt; SP &lt;ref-name&gt; LF</pre>
	</div>
	</div>
	<div class="paragraph">
	<p>where <code>&lt;old-value&gt;</code> is the old object name stored in the ref,
	<code>&lt;new-value&gt;</code> is the new object name to be stored in the ref and
	<code>&lt;ref-name&gt;</code> is the full name of the ref.
	When creating a new ref, <code>&lt;old-value&gt;</code> is the all-zeroes object name.</p>
	</div>
	<div class="paragraph">
	<p>If the hook exits with non-zero status, none of the refs will be
	updated. If the hook exits with zero, updating of individual refs can
	still be prevented by the <a href="https://git-scm.com/docs/githooks#update"><em>update</em></a> hook.</p>
	</div>
	<div class="paragraph">
	<p>Both standard output and standard error output are forwarded to
	<code>git send-pack</code> on the other end, so you can simply <code>echo</code> messages
	for the user.</p>
	</div>
	<div class="paragraph">
	<p>The number of push options given on the command line of
	<code>git push --push-option=...</code> can be read from the environment
	variable <code>GIT_PUSH_OPTION_COUNT</code>, and the options themselves are
	found in <code>GIT_PUSH_OPTION_0</code>, <code>GIT_PUSH_OPTION_1</code>,…​
	If it is negotiated to not use the push options phase, the
	environment variables will not be set. If the client selects
	to use push options, but doesn’t transmit any, the count variable
	will be set to zero, <code>GIT_PUSH_OPTION_COUNT=0</code>.</p>
	</div>
	<div class="paragraph">
	<p>See the section on "Quarantine Environment" in
	<a href="https://git-scm.com/docs/git-receive-pack">git-receive-pack[1]</a> for some caveats.</p>
	</div>
	</div>`,
	'post-receive': `<div class="sect2">
	<h3 id="post-receive"><a class="anchor" href="https://git-scm.com/docs/githooks#post-receive"></a>post-receive</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-receive-pack">git-receive-pack[1]</a> when it reacts to
	<code>git push</code> and updates reference(s) in its repository.
	It executes on the remote repository once after all the refs have
	been updated.</p>
	</div>
	<div class="paragraph">
	<p>This hook executes once for the receive operation.  It takes no
	arguments, but gets the same information as the
	<a href="https://git-scm.com/docs/githooks#pre-receive"><em>pre-receive</em></a>
	hook does on its standard input.</p>
	</div>
	<div class="paragraph">
	<p>This hook does not affect the outcome of <code>git receive-pack</code>, as it
	is called after the real work is done.</p>
	</div>
	<div class="paragraph">
	<p>This supersedes the <a href="https://git-scm.com/docs/githooks#post-update"><em>post-update</em></a> hook in that it gets
	both old and new values of all the refs in addition to their
	names.</p>
	</div>
	<div class="paragraph">
	<p>Both standard output and standard error output are forwarded to
	<code>git send-pack</code> on the other end, so you can simply <code>echo</code> messages
	for the user.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>post-receive</em> hook is empty, but there is
	a sample script <code>post-receive-email</code> provided in the <code>contrib/hooks</code>
	directory in Git distribution, which implements sending commit
	emails.</p>
	</div>
	<div class="paragraph">
	<p>The number of push options given on the command line of
	<code>git push --push-option=...</code> can be read from the environment
	variable <code>GIT_PUSH_OPTION_COUNT</code>, and the options themselves are
	found in <code>GIT_PUSH_OPTION_0</code>, <code>GIT_PUSH_OPTION_1</code>,…​
	If it is negotiated to not use the push options phase, the
	environment variables will not be set. If the client selects
	to use push options, but doesn’t transmit any, the count variable
	will be set to zero, <code>GIT_PUSH_OPTION_COUNT=0</code>.</p>
	</div>
	</div>`,
	'post-update': `<div class="sect2">
	<h3 id="post-update"><a class="anchor" href="https://git-scm.com/docs/githooks#post-update"></a>post-update</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-receive-pack">git-receive-pack[1]</a> when it reacts to
	<code>git push</code> and updates reference(s) in its repository.
	It executes on the remote repository once after all the refs have
	been updated.</p>
	</div>
	<div class="paragraph">
	<p>It takes a variable number of parameters, each of which is the
	name of ref that was actually updated.</p>
	</div>
	<div class="paragraph">
	<p>This hook is meant primarily for notification, and cannot affect
	the outcome of <code>git receive-pack</code>.</p>
	</div>
	<div class="paragraph">
	<p>The <em>post-update</em> hook can tell what are the heads that were pushed,
	but it does not know what their original and updated values are,
	so it is a poor place to do log old..new. The
	<a href="https://git-scm.com/docs/githooks#post-receive"><em>post-receive</em></a> hook does get both original and
	updated values of the refs. You might consider it instead if you need
	them.</p>
	</div>
	<div class="paragraph">
	<p>When enabled, the default <em>post-update</em> hook runs
	<code>git update-server-info</code> to keep the information used by dumb
	transports (e.g., HTTP) up to date.  If you are publishing
	a Git repository that is accessible via HTTP, you should
	probably enable this hook.</p>
	</div>
	<div class="paragraph">
	<p>Both standard output and standard error output are forwarded to
	<code>git send-pack</code> on the other end, so you can simply <code>echo</code> messages
	for the user.</p>
	</div>
	</div>`,
	'push-to-checkout': `<div class="sect2">
	<h3 id="_push_to_checkout"><a class="anchor" href="https://git-scm.com/docs/githooks#_push_to_checkout"></a>push-to-checkout</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-receive-pack">git-receive-pack[1]</a> when it reacts to
	<code>git push</code> and updates reference(s) in its repository, and when
	the push tries to update the branch that is currently checked out
	and the <code>receive.denyCurrentBranch</code> configuration variable is set to
	<code>updateInstead</code>.  Such a push by default is refused if the working
	tree and the index of the remote repository has any difference from
	the currently checked out commit; when both the working tree and the
	index match the current commit, they are updated to match the newly
	pushed tip of the branch.  This hook is to be used to override the
	default behaviour.</p>
	</div>
	<div class="paragraph">
	<p>The hook receives the commit with which the tip of the current
	branch is going to be updated.  It can exit with a non-zero status
	to refuse the push (when it does so, it must not modify the index or
	the working tree).  Or it can make any necessary changes to the
	working tree and to the index to bring them to the desired state
	when the tip of the current branch is updated to the new commit, and
	exit with a zero status.</p>
	</div>
	<div class="paragraph">
	<p>For example, the hook can simply run <code>git read-tree -u -m HEAD "$1"</code>
	in order to emulate <code>git fetch</code> that is run in the reverse direction
	with <code>git push</code>, as the two-tree form of <code>git read-tree -u -m</code> is
	essentially the same as <code>git switch</code> or <code>git checkout</code>
	that switches branches while
	keeping the local changes in the working tree that do not interfere
	with the difference between the branches.</p>
	</div>
	</div>`,
	'pre-auto-gc': `<div class="sect2">
	<h3 id="_pre_auto_gc"><a class="anchor" href="https://git-scm.com/docs/githooks#_pre_auto_gc"></a>pre-auto-gc</h3>
	<div class="paragraph">
	<p>This hook is invoked by <code>git gc --auto</code> (see <a href="https://git-scm.com/docs/git-gc">git-gc[1]</a>). It
	takes no parameter, and exiting with non-zero status from this script
	causes the <code>git gc --auto</code> to abort.</p>
	</div>
	</div>`,
	'post-rewrite': `<div class="sect2">
	<h3 id="_post_rewrite"><a class="anchor" href="https://git-scm.com/docs/githooks#_post_rewrite"></a>post-rewrite</h3>
	<div class="paragraph">
	<p>This hook is invoked by commands that rewrite commits
	(<a href="https://git-scm.com/docs/git-commit">git-commit[1]</a> when called with <code>--amend</code> and
	<a href="https://git-scm.com/docs/git-rebase">git-rebase[1]</a>; however, full-history (re)writing tools like
	<a href="https://git-scm.com/docs/git-fast-import">git-fast-import[1]</a> or
	<a href="https://github.com/newren/git-filter-repo">git-filter-repo</a> typically
	do not call it!).  Its first argument denotes the command it was
	invoked by: currently one of <code>amend</code> or <code>rebase</code>.  Further
	command-dependent arguments may be passed in the future.</p>
	</div>
	<div class="paragraph">
	<p>The hook receives a list of the rewritten commits on stdin, in the
	format</p>
	</div>
	<div class="literalblock">
	<div class="content">
	<pre>&lt;old-object-name&gt; SP &lt;new-object-name&gt; [ SP &lt;extra-info&gt; ] LF</pre>
	</div>
	</div>
	<div class="paragraph">
	<p>The <em>extra-info</em> is again command-dependent.  If it is empty, the
	preceding SP is also omitted.  Currently, no commands pass any
	<em>extra-info</em>.</p>
	</div>
	<div class="paragraph">
	<p>The hook always runs after the automatic note copying (see
	"notes.rewrite.&lt;command&gt;" in <a href="https://git-scm.com/docs/git-config">git-config[1]</a>) has happened, and
	thus has access to these notes.</p>
	</div>
	<div class="paragraph">
	<p>The following command-specific comments apply:</p>
	</div>
	<div class="dlist">
	<dl>
	<dt class="hdlist1" id="Documentation/githooks.txt-rebase"> <a class="anchor" href="https://git-scm.com/docs/githooks#Documentation/githooks.txt-rebase"></a>rebase </dt>
	<dd>
	<p>For the <em>squash</em> and <em>fixup</em> operation, all commits that were
	squashed are listed as being rewritten to the squashed commit.
	This means that there will be several lines sharing the same
	<em>new-object-name</em>.</p>
	<div class="paragraph">
	<p>The commits are guaranteed to be listed in the order that they were
	processed by rebase.</p>
	</div>
	</dd>
	</dl>
	</div>
	</div>`,
	'sendemail-validate': `<div class="sect2">
	<h3 id="_sendemail_validate"><a class="anchor" href="https://git-scm.com/docs/githooks#_sendemail_validate"></a>sendemail-validate</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-send-email">git-send-email[1]</a>.  It takes a single parameter,
	the name of the file that holds the e-mail to be sent.  Exiting with a
	non-zero status causes <code>git send-email</code> to abort before sending any
	e-mails.</p>
	</div>
	</div>`,
	'fsmonitor-watchman':`<div class="sect2">
	<h3 id="_fsmonitor_watchman"><a class="anchor" href="https://git-scm.com/docs/githooks#_fsmonitor_watchman"></a>fsmonitor-watchman</h3>
	<div class="paragraph">
	<p>This hook is invoked when the configuration option <code>core.fsmonitor</code> is
	set to <code>.git/hooks/fsmonitor-watchman</code> or <code>.git/hooks/fsmonitor-watchmanv2</code>
	depending on the version of the hook to use.</p>
	</div>
	<div class="paragraph">
	<p>Version 1 takes two arguments, a version (1) and the time in elapsed
	nanoseconds since midnight, January 1, 1970.</p>
	</div>
	<div class="paragraph">
	<p>Version 2 takes two arguments, a version (2) and a token that is used
	for identifying changes since the token. For watchman this would be
	a clock id. This version must output to stdout the new token followed
	by a NUL before the list of files.</p>
	</div>
	<div class="paragraph">
	<p>The hook should output to stdout the list of all files in the working
	directory that may have changed since the requested time.  The logic
	should be inclusive so that it does not miss any potential changes.
	The paths should be relative to the root of the working directory
	and be separated by a single NUL.</p>
	</div>
	<div class="paragraph">
	<p>It is OK to include files which have not actually changed.  All changes
	including newly-created and deleted files should be included. When
	files are renamed, both the old and the new name should be included.</p>
	</div>
	<div class="paragraph">
	<p>Git will limit what files it checks for changes as well as which
	directories are checked for untracked files based on the path names
	given.</p>
	</div>
	<div class="paragraph">
	<p>An optimized way to tell git "all files have changed" is to return
	the filename <code>/</code>.</p>
	</div>
	<div class="paragraph">
	<p>The exit status determines whether git will use the data from the
	hook to limit its search.  On error, it will fall back to verifying
	all files and folders.</p>
	</div>
	</div>`,
	'update':`<div class="sect2">
	<h3 id="update"><a class="anchor" href="https://git-scm.com/docs/githooks#update"></a>update</h3>
	<div class="paragraph">
	<p>This hook is invoked by <a href="https://git-scm.com/docs/git-receive-pack">git-receive-pack[1]</a> when it reacts to
	<code>git push</code> and updates reference(s) in its repository.
	Just before updating the ref on the remote repository, the update hook
	is invoked.  Its exit status determines the success or failure of
	the ref update.</p>
	</div>
	<div class="paragraph">
	<p>The hook executes once for each ref to be updated, and takes
	three parameters:</p>
	</div>
	<div class="ulist">
	<ul>
	<li>
	<p>the name of the ref being updated,</p>
	</li>
	<li>
	<p>the old object name stored in the ref,</p>
	</li>
	<li>
	<p>and the new object name to be stored in the ref.</p>
	</li>
	</ul>
	</div>
	<div class="paragraph">
	<p>A zero exit from the update hook allows the ref to be updated.
	Exiting with a non-zero status prevents <code>git receive-pack</code>
	from updating that ref.</p>
	</div>
	<div class="paragraph">
	<p>This hook can be used to prevent <em>forced</em> update on certain refs by
	making sure that the object name is a commit object that is a
	descendant of the commit object named by the old object name.
	That is, to enforce a "fast-forward only" policy.</p>
	</div>
	<div class="paragraph">
	<p>It could also be used to log the old..new status.  However, it
	does not know the entire set of branches, so it would end up
	firing one e-mail per ref when used naively, though.  The
	<a href="https://git-scm.com/docs/githooks#post-receive"><em>post-receive</em></a> hook is more suited to that.</p>
	</div>
	<div class="paragraph">
	<p>In an environment that restricts the users' access only to git
	commands over the wire, this hook can be used to implement access
	control without relying on filesystem ownership and group
	membership. See <a href="https://git-scm.com/docs/git-shell">git-shell[1]</a> for how you might use the login
	shell to restrict the user’s access to only git commands.</p>
	</div>
	<div class="paragraph">
	<p>Both standard output and standard error output are forwarded to
	<code>git send-pack</code> on the other end, so you can simply <code>echo</code> messages
	for the user.</p>
	</div>
	<div class="paragraph">
	<p>The default <em>update</em> hook, when enabled—​and with
	<code>hooks.allowunannotated</code> config option unset or set to false—​prevents
	unannotated tags to be pushed.</p>
	</div>
	</div>`
};

const HOOK_MAP = new Map(Object.entries(HOOK_DESCRIPTION));
export {HOOK_MAP};