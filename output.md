# Collected Files

## File Structure

```
├── [✓] ▶ src
│   ├── [✓] ▶ DB
│   │   ├── [✓] ▶ enums
│   │   │   └── [✓] user.enum.ts
│   │   ├── [✓] ▶ models
│   │   │   ├── [✓] cart.model.ts
│   │   │   ├── [✓] category.model.ts
│   │   │   ├── [✓] coupon.model.ts
│   │   │   ├── [✓] order.model.ts
│   │   │   ├── [✓] otp.model.ts
│   │   │   ├── [✓] product.model.ts
│   │   │   ├── [✓] review.model.ts
│   │   │   ├── [✓] sub-category.model.ts
│   │   │   ├── [✓] token.model.ts
│   │   │   ├── [✓] user.model.ts
│   │   │   └── [✓] wishlist.model.ts
│   │   └── [✓] ▶ repositories
│   │       ├── [✓] abstract.repository.ts
│   │       ├── [✓] cart.repository.ts
│   │       ├── [✓] category.repository.ts
│   │       ├── [✓] coupon.repository.ts
│   │       ├── [✓] order.repository.ts
│   │       ├── [✓] otp.repository.ts
│   │       ├── [✓] product.repository.ts
│   │       ├── [✓] review.repository.ts
│   │       ├── [✓] sub-category.repository.ts
│   │       ├── [✓] token.repository.ts
│   │       ├── [✓] user.repository.ts
│   │       └── [✓] wishlist.repository.ts
│   ├── [✓] ▶ common
│   │   ├── [✓] ▶ decorarors
│   │   │   ├── [✓] public.decorator.ts
│   │   │   ├── [✓] roles.decorator.ts
│   │   │   └── [✓] user.decorator.ts
│   │   ├── [✓] ▶ guards
│   │   │   ├── [✓] auth.guard.ts
│   │   │   └── [✓] authorization.guards.ts
│   │   ├── [✓] ▶ interceptors
│   │   │   └── [✓] error-handle.interceptor.ts
│   │   ├── [✓] ▶ security
│   │   │   └── [✓] hash.util.ts
│   │   ├── [✓] ▶ services
│   │   │   ├── [✓] ▶ fileupload
│   │   │   │   ├── [✓] cloudinary.provider.ts
│   │   │   │   ├── [✓] fileupload.module.ts
│   │   │   │   └── [✓] fileupload.service.ts
│   │   │   └── [✓] ▶ payment
│   │   │       ├── [✓] payment.module.ts
│   │   │       ├── [✓] payment.provider.ts
│   │   │       └── [✓] payment.service.ts
│   │   ├── [✓] ▶ types
│   │   │   └── [✓] image.type.ts
│   │   └── [✓] constants.ts
│   ├── [✓] ▶ modules
│   │   ├── [✓] ▶ analytics
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-analytics.dto.ts
│   │   │   │   └── [✓] update-analytics.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] analytics.entity.ts
│   │   │   ├── [✓] analytics.controller.spec.ts
│   │   │   ├── [✓] analytics.controller.ts
│   │   │   ├── [✓] analytics.module.ts
│   │   │   ├── [✓] analytics.service.spec.ts
│   │   │   └── [✓] analytics.service.ts
│   │   ├── [✓] ▶ auth
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-auth.dto.ts
│   │   │   │   ├── [✓] login.dto.ts
│   │   │   │   ├── [✓] reset-password.dto.ts
│   │   │   │   ├── [✓] send-otp.dto.ts
│   │   │   │   └── [✓] update-auth.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] auth.entity.ts
│   │   │   ├── [✓] ▶ strategies
│   │   │   │   └── [✓] google.strategy.ts
│   │   │   ├── [✓] auth.controller.spec.ts
│   │   │   ├── [✓] auth.controller.ts
│   │   │   ├── [✓] auth.module.ts
│   │   │   ├── [✓] auth.service.spec.ts
│   │   │   └── [✓] auth.service.ts
│   │   ├── [✓] ▶ cart
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-cart.dto.ts
│   │   │   │   └── [✓] update-cart.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] cart.entity.ts
│   │   │   ├── [✓] cart.controller.spec.ts
│   │   │   ├── [✓] cart.controller.ts
│   │   │   ├── [✓] cart.module.ts
│   │   │   ├── [✓] cart.service.spec.ts
│   │   │   └── [✓] cart.service.ts
│   │   ├── [✓] ▶ category
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-category.dto.ts
│   │   │   │   └── [✓] update-category.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] category.entity.ts
│   │   │   ├── [✓] category.controller.spec.ts
│   │   │   ├── [✓] category.controller.ts
│   │   │   ├── [✓] category.module.ts
│   │   │   ├── [✓] category.service.spec.ts
│   │   │   └── [✓] category.service.ts
│   │   ├── [✓] ▶ coupon
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-coupon.dto.ts
│   │   │   │   └── [✓] update-coupon.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] coupon.entity.ts
│   │   │   ├── [✓] coupon.controller.spec.ts
│   │   │   ├── [✓] coupon.controller.ts
│   │   │   ├── [✓] coupon.module.ts
│   │   │   ├── [✓] coupon.service.spec.ts
│   │   │   └── [✓] coupon.service.ts
│   │   ├── [✓] ▶ order
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-order.dto.ts
│   │   │   │   └── [✓] update-order.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] order.entity.ts
│   │   │   ├── [✓] order.controller.spec.ts
│   │   │   ├── [✓] order.controller.ts
│   │   │   ├── [✓] order.module.ts
│   │   │   ├── [✓] order.service.spec.ts
│   │   │   └── [✓] order.service.ts
│   │   ├── [✓] ▶ product
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-product.dto.ts
│   │   │   │   ├── [✓] find-products.dto.ts
│   │   │   │   ├── [✓] remove-image.dto..ts
│   │   │   │   └── [✓] update-product.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] product.entity.ts
│   │   │   ├── [✓] ▶ pipes
│   │   │   │   └── [✓] required-thumbnail.pipe.ts
│   │   │   ├── [✓] product.controller.spec.ts
│   │   │   ├── [✓] product.controller.ts
│   │   │   ├── [✓] product.module.ts
│   │   │   ├── [✓] product.service.spec.ts
│   │   │   └── [✓] product.service.ts
│   │   ├── [✓] ▶ review
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-review.dto.ts
│   │   │   │   └── [✓] update-review.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] review.entity.ts
│   │   │   ├── [✓] review.controller.spec.ts
│   │   │   ├── [✓] review.controller.ts
│   │   │   ├── [✓] review.module.ts
│   │   │   ├── [✓] review.service.spec.ts
│   │   │   └── [✓] review.service.ts
│   │   ├── [✓] ▶ socket
│   │   │   ├── [✓] socket.module.ts
│   │   │   └── [✓] stock.gateway.ts
│   │   ├── [✓] ▶ sub-category
│   │   │   ├── [✓] ▶ dto
│   │   │   │   ├── [✓] create-sub-category.dto.ts
│   │   │   │   └── [✓] update-sub-category.dto.ts
│   │   │   ├── [✓] ▶ entities
│   │   │   │   └── [✓] sub-category.entity.ts
│   │   │   ├── [✓] sub-category.controller.spec.ts
│   │   │   ├── [✓] sub-category.controller.ts
│   │   │   ├── [✓] sub-category.module.ts
│   │   │   ├── [✓] sub-category.service.spec.ts
│   │   │   └── [✓] sub-category.service.ts
│   │   ├── [✓] ▶ user
│   │   │   ├── [✓] ▶ dtos
│   │   │   │   ├── [✓] add-address.dto.ts
│   │   │   │   └── [✓] create-user.dto.ts
│   │   │   ├── [✓] user.controller.spec.ts
│   │   │   ├── [✓] user.controller.ts
│   │   │   ├── [✓] user.module.ts
│   │   │   ├── [✓] user.service.spec.ts
│   │   │   └── [✓] user.service.ts
│   │   └── [✓] ▶ wishlist
│   │       ├── [✓] ▶ dto
│   │       │   ├── [✓] create-wishlist.dto.ts
│   │       │   └── [✓] update-wishlist.dto.ts
│   │       ├── [✓] ▶ entities
│   │       │   └── [✓] wishlist.entity.ts
│   │       ├── [✓] wishlist.controller.spec.ts
│   │       ├── [✓] wishlist.controller.ts
│   │       ├── [✓] wishlist.module.ts
│   │       ├── [✓] wishlist.service.spec.ts
│   │       └── [✓] wishlist.service.ts
│   ├── [✓] app.controller.spec.ts
│   ├── [✓] app.controller.ts
│   ├── [✓] app.module.ts
│   ├── [✓] app.service.ts
│   └── [✓] main.ts
├── [✓] ▶ test
│   ├── [✓] app.e2e-spec.ts
│   └── [✓] jest-e2e.json
├── [✓] .gitignore
├── [✓] .prettierrc
├── [✓] README.md
├── [✓] eslint.config.mjs
├── [✓] nest-cli.json
├── [✓] package.json
├── [✓] tsconfig.build.json
├── [✓] tsconfig.json
└── [✓] vercel.json
```

---

## .git\COMMIT_EDITMSG

```text
Editing

```

---

## .git\FETCH_HEAD

```text
f8d59042620f44b0692a8c87174ab9f5690e8951		branch 'main' of https://github.com/Mohamed-Mansour11/Ecommerce--Ultra-Store

```

---

## .git\HEAD

```text
ref: refs/heads/main

```

---

## .git\ORIG_HEAD

```text
84a6be521568840ae779c3fa439a3146bccd0274

```

---

## .git\config

```text
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://github.com/Mohamed-Mansour11/Ecommerce--Ultra-Store.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main

```

---

## .git\description

```text
Unnamed repository; edit this file 'description' to name the repository.

```

---

## .git\hooks\applypatch-msg.sample

```text
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:

```

---

## .git\hooks\commit-msg.sample

```text
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}

```

---

## .git\hooks\fsmonitor-watchman.sample

```text
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $output->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		$last_update_token = $o->{clock};

		eval { launch_watchman() };
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}

```

---

## .git\hooks\post-update.sample

```text
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info

```

---

## .git\hooks\pre-applypatch.sample

```text
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:

```

---

## .git\hooks\pre-commit.sample

```text
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff-index --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --

```

---

## .git\hooks\pre-merge-commit.sample

```text
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:

```

---

## .git\hooks\pre-push.sample

```text
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0

```

---

## .git\hooks\pre-rebase.sample

```text
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END

```

---

## .git\hooks\pre-receive.sample

```text
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi

```

---

## .git\hooks\prepare-commit-msg.sample

```text
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi

```

---

## .git\hooks\push-to-checkout.sample

```text
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi

```

---

## .git\hooks\sendemail-validate.sample

```text
#!/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}

unset GIT_DIR GIT_WORK_TREE
cd "$worktree" &&

if grep -q "^diff --git " "$1"
then
	validate_patch "$1"
else
	validate_cover_letter "$1"
fi &&

if test "$GIT_SENDEMAIL_FILE_COUNTER" = "$GIT_SENDEMAIL_FILE_TOTAL"
then
	git config --unset-all sendemail.validateWorktree &&
	trap 'git worktree remove -ff "$worktree"' EXIT &&
	validate_series
fi

```

---

## .git\hooks\update.sample

```text
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0

```

---

## .git\index

```text
*Binary file*
```

---

## .git\info\exclude

```text
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~

```

---

## .git\objects\00\08ae716c41683466c81810c4cecb122c180203

```text
*Binary file*
```

---

## .git\objects\00\8be611001c43f71ab737b2abfaca2affd0b1e1

```text
*Binary file*
```

---

## .git\objects\00\ef00f2f5f4fea80a59fbb3da67d7d870dcee8a

```text
*Binary file*
```

---

## .git\objects\02\45d6c47ad1e9e9780a36ce6efc1a5e7be2a774

```text
x��;n�0S��\R�A���ܕ% �,|��O�v��W�o];p���$%%Z(#S�bh�Y1�r4�읨69���.Y�(�G�X�f&�
���֦u�]���㬣�O����n��8���Q��~��s�렩��KC�s��$�o��.z-��%|���t/��Y�[�,e�
```

---

## .git\objects\04\0b680383e138072db1dc96a7bec595b7fe04ff

```text
*Binary file*
```

---

## .git\objects\05\36d4dd9794937524f910e3e3c9e58781962fd2

```text
*Binary file*
```

---

## .git\objects\05\89d3e093e230c780fdb2f2a4b455ed4531ee6a

```text
x��K��0Dg�S�M��B\�C�� Mb�8n�Ŗ�,���U��,����VE@)
9
'��9A��Y�dPP�O�v�Ó�����&�ƆlB�觐=��ds4�.vLz�ͥµ̼H��򺕽����Dև�Wy�7�۸�*Ͽ�x�y�c*��{�A���
q�?i򟎏��>��׻l�
�>��kx�8f{
```

---

## .git\objects\06\dca997e02388dea9e26f216f4d3088e761d7d1

```text
*Binary file*
```

---

## .git\objects\07\c6d35ab435a32144ebfa8cf145fbbfe66e976a

```text
x��;n�0S��H�\.?A`�:)�"�hPT��Gp�:�<f*�zk��>ZQH$���Y#Xb�٤�s�=�����G��5�C&�p�&�a�I�:�d�%&���G[JUcY�*�s��^����������9v�{��*�������H�T֫B�ز��4@w�gI��t�$g��0t��_9
```

---

## .git\objects\09\5387d7f1a6970e5df424161825afa7fd03fa40

```text
*Binary file*
```

---

## .git\objects\0a\55b463f85217baaef4a44e1dca81aaf4e804fa

```text
*Binary file*
```

---

## .git\objects\0a\8c2cae1af0a84cf90e58f74f38e9eed6101615

```text
*Binary file*
```

---

## .git\objects\0b\0b3371ff459cc54e9b8695254aeb3822d9c142

```text
*Binary file*
```

---

## .git\objects\0b\eba5f1f67ef54ed35d94bcbc2e4af00e7af055

```text
*Binary file*
```

---

## .git\objects\0c\30749b725dbc68a4304367ca37be9bbdc7b2fa

```text
*Binary file*
```

---

## .git\objects\0c\c151226044600db0fe88805280df17c98d82ca

```text
*Binary file*
```

---

## .git\objects\0c\db86cf744191cc5093cf0fb8b16467c30da58f

```text
x��MK�0�=�W�mJ{RD/�z��qnv��i�L��.���|4�D=���̛�J�
.�/O�n 60���
a������FR�Q��	|��OȻVf�n��Z���%������f���4;-�`�*�����4�\q��{����0)����2u�5�{S��O�ٛc�>��g4����l��pAӉ�e��NG�����mśT��*�L�v��9^N�� G�=r���*�x2?m��,0���R�k�	�`��7�G��
```

---

## .git\objects\0d\8fce090744dd37569936ebec01b36551ecebb9

```text
*Binary file*
```

---

## .git\objects\0f\fa342bd1a1326eb2a8438e55512e53b7f373ce

```text
*Binary file*
```

---

## .git\objects\10\0de4fb4cae8f56cd58e6caa8a9053ca27a6bd0

```text
*Binary file*
```

---

## .git\objects\11\ba2b317bdf548d83ccbefee1e8114995d95637

```text
*Binary file*
```

---

## .git\objects\11\ef78da77f8bbfa92315eea536aa431f27df2e5

```text
*Binary file*
```

---

## .git\objects\13\3e27ab731521063585d4b95fbe1f8045c9763b

```text
*Binary file*
```

---

## .git\objects\14\302b3ea906e8757d63049646479c30bde29d37

```text
*Binary file*
```

---

## .git\objects\15\e35fc8ace139f90aa80efa307a4ecc5ecce4f5

```text
*Binary file*
```

---

## .git\objects\15\f15a8b0622f2156395448a36252a0e622af492

```text
*Binary file*
```

---

## .git\objects\16\5106e58a283b8bb3de4ecec60391e487387444

```text
*Binary file*
```

---

## .git\objects\17\f6b639d35096173993301ad59ecfd2e5ad9f1b

```text
*Binary file*
```

---

## .git\objects\18\51f526be25d31951ef23233f7baf7f9cf9cbcb

```text
*Binary file*
```

---

## .git\objects\18\521c5b33bf7dce67b06d64913ce150e36906e5

```text
xe�A
�0E��)fg�Ѕ�v�
��҅�)�$��Di�ޔX�t�����±(vB�F�P�K�	�$�F�.���̖`��0XYD�v��4/��gfF�RY�v|��J.��2Nُ���Np�v��rKC��o��N)p�8s���8�7)�az
```

---

## .git\objects\19\8166252e920b395f5badfc15099400aa16be4d

```text
*Binary file*
```

---

## .git\objects\19\aaaf490b4a1a123d70f5227e1224d69fd4349c

```text
*Binary file*
```

---

## .git\objects\1a\ce9d9df6bfbf99e8409e3d961860ea43efcfad

```text
*Binary file*
```

---

## .git\objects\20\5feaaa210ba1f70a8ec049abbec89a87c1c31e

```text
*Binary file*
```

---

## .git\objects\22\18dbeac60c66e03823dbe33c40e0ed4e714ff3

```text
*Binary file*
```

---

## .git\objects\22\49a31bb15ac873749245648ad1cc9dd00e86c1

```text
*Binary file*
```

---

## .git\objects\23\7e3967d245b61c14521c13725d62fbd5121fc1

```text
*Binary file*
```

---

## .git\objects\24\28c1babf6c71fd99d28ab180647e742ccbaee6

```text
*Binary file*
```

---

## .git\objects\26\962bd44398b1d9fbf4f50b4d085f295571bb4b

```text
x+)JMU��`040031Q(�O�N-���O)�I�+)f03���&�x'��Onޞ�#�z�Lm	P�^zbIjyb%Hmդk����y��*sN=�-ݧ��'�
```

---

## .git\objects\29\3e6bfb303d8393dbf19fddb8e03b451fdfa49e

```text
*Binary file*
```

---

## .git\objects\29\fb48b06d3df9b9ed841fdc4ce1ed53a61733c3

```text
*Binary file*
```

---

## .git\objects\2b\e7dce973de972e50e4eeac39e0fde1c3734034

```text
*Binary file*
```

---

## .git\objects\2e\64701b872f436bd69e2c605ed28fd2b05adbe1

```text
*Binary file*
```

---

## .git\objects\2e\de5378cebfd501ddfb89cd2e730b00ac2cac9e

```text
*Binary file*
```

---

## .git\objects\2e\f6ebb317742445af63e48b6c24eb382f190a29

```text
*Binary file*
```

---

## .git\objects\2f\3591d67df2121ba0fd0f6a77cb030246aefb1d

```text
*Binary file*
```

---

## .git\objects\30\7462d3ef56731453463236c84885e3221fee4f

```text
*Binary file*
```

---

## .git\objects\30\7968ecd27f625881d12055bf4e5c9fc70f1257

```text
*Binary file*
```

---

## .git\objects\30\bb3b9c74b2114948de1f69fe0d1dfcface115e

```text
*Binary file*
```

---

## .git\objects\31\a81180fee682e7d2aa4bffd44470a3de940f29

```text
*Binary file*
```

---

## .git\objects\33\5763b1296e7d275d9f4802cd63eb1f45308519

```text
*Binary file*
```

---

## .git\objects\35\320065e4efc867de32b09a88f2732f6e7a2e41

```text
*Binary file*
```

---

## .git\objects\36\36b1f43c5433b90fa7f1e4d9db974c10eba136

```text
xu�?�@ŝ�Sd�B�"�K7Ap*N��?���5�r�J�w���ZD�����$���j���Bm��f���E�/,������۲���]lD?G������)�o̟�Ec�����"9j���!��`���-�4��Lh��i��[Ӆ�1��=#�~�w�<HeL�=P�oi;�I�p�
```

---

## .git\objects\36\5a9994cf42e9fe54826277e7ac28bdb46768f0

```text
x}�Mk�@�{����d0�K)�B��`�Թ�"֫q���+vGi���쇒8I{0���;��ǡ5������zc	ΰ��(IZ\�o��hMٵFG�����ήI�'�zLA.윽g��}��n�������S6ge��ڑ����� _.�O���pvb�P�����@��A��yR����[�(��h�nG��D�%��g*K�'�f ��)��Q�QK�,%�$�>zs_�UkEعU�;$��j��f�΢)G�C[c'T�ߦ���)�&�	+:ǌ!y�|�[(:)WĦ���"�"�'Z�>ΰfΓij{t�Ȥ�M�3bt��
����t��(.��a��yԦ�]���]?�W3p��<�z�-�<�UY�F��dU���u�b�P
�i�+�!O���LK>5Oc���^�v��]��M�5��ۋ���`-j9��G+�Dks<��m|o����
C������;���q�ǋ�f>/[ib�*\��5_�;���E�����N��)$h8
```

---

## .git\objects\36\852c54f010731b3658b7c99407e42994c68cf6

```text
*Binary file*
```

---

## .git\objects\36\b8b129c16651badc81bec6bbebc25110a83971

```text
*Binary file*
```

---

## .git\objects\37\c064d4a2f718f53a940426c4d12cddd297c471

```text
*Binary file*
```

---

## .git\objects\38\2e38ca910f4a50c84fda045623f67272b98045

```text
*Binary file*
```

---

## .git\objects\3b\51c67dfa4f3495ab9738bd1ca8fbcb752ccec8

```text
*Binary file*
```

---

## .git\objects\3c\2ecb294269fdaaa2870edb230bbfdc5947be82

```text
*Binary file*
```

---

## .git\objects\3c\d933344c52a7f0c2f3244b1e2de178c9bfe871

```text
*Binary file*
```

---

## .git\objects\3f\7ebb1d073a2133595f3486a42d36d1bcefdf69

```text
*Binary file*
```

---

## .git\objects\40\71e0979733dc35bcfafc46c0780529d91a966a

```text
*Binary file*
```

---

## .git\objects\40\f704cd255a47bbd88a96593ba41aa343ccb0a1

```text
*Binary file*
```

---

## .git\objects\42\2569838b45d43534b329b7f728745b650531c9

```text
*Binary file*
```

---

## .git\objects\45\36a9678d4827f315df0c1a1656f81ddbf1abda

```text
*Binary file*
```

---

## .git\objects\45\7b19a5458d48dd0798d7aa6515db4a06b48d13

```text
x��Kj�0E;�*�<�����RJ7(ف"��)�dy���t�q��p9�\���ɰ����-����`��"b<l��������NJ[W|��
#"JP���k���t�C��T��f��)-k�3��3��I8<��mE[ǥ6�~ǯ[��˘��N,���+:(�԰�{I�3��=���X;�+}���܇?��eH
```

---

## .git\objects\47\12b767cfad00e2408222b08e0ffd877659c341

```text
x+)JMU066b040031QH,-��K��+)���I-�+.HM�+)f���X6Zؒ%���?��F=wph�f�~&� ��]j���տNi����!�����ҜT��]*�7���^����9��xҬ^d�ũEe�ɩpw4pmKʚ|�Ev�Õ�{/{�.���z��_ٟ&�����N�aa��K��( PH)�g��iU�H�O�ۆ?�=��zUu�9D65�$�$3����2�ͥ���Ƌ
���b��
�().)J,IM)�lLS՛�m���(��Ub�|�ۅ
```

---

## .git\objects\47\294157750400a48c07019dbd4edf60c25438d9

```text
*Binary file*
```

---

## .git\objects\47\f4442729609f9a6cd69b4da125967b7fa14166

```text
*Binary file*
```

---

## .git\objects\4a\267e235915f8102d649f1806ad896bb3ef9463

```text
*Binary file*
```

---

## .git\objects\4a\cca5be0776bbeb740308c0f7356c5d3e4518ee

```text
*Binary file*
```

---

## .git\objects\4b\56acfbebf41e17d1ff0dd945bb4c545eae1db1

```text
xmR�n�0�Y_�!�5@䞊v�e�,�.���(�EA����G�)=��{|"�'�{���x���"x��se��@z؏�kR]_C�J��7H��F�Jy�x����Z�|�%]�g�`Y�J���}��v��1h#_�X��p�bP�Ig���V�_�_H��5� {Dj��L.x�ʸh���,��vr[�D��@����0��/����<[z����,n(3��ܭՇ��ks$Lo4[:��̼!�C��颖��(Ԥ����dK�}�G.������	"�&?�����5#|u,c��e�Ld����WX��4,Q���b����������hI@�zj�m�CB��t���I<0g����H�����n<�{u�6Ͽ���4����
```

---

## .git\objects\4b\825dc642cb6eb9a060e54bf8d69288fbee4904

```text
*Binary file*
```

---

## .git\objects\4c\e0f114db0f6f112eff39508c46cdc6fa13ea70

```text
*Binary file*
```

---

## .git\objects\4d\7ae4067ea4db6f7a4b0010174ca71e5c5e1857

```text
*Binary file*
```

---

## .git\objects\4d\bbd2ba7cf6a4bd238a737d56b46d402dd42d8e

```text
xu�QK�0�}omaLP_l�Xj��α͇!R��nd�II����&��4/!7��$�#�����-+.�!}~}{�Β�Z�	^�/�$�,9���`J���[�+($�G^o)+ĩ7�~��S�vt�D�P�����Ti�V�=���,�I���-
�����c��q-� ��SA��C�J�@�;c�90�>$gE���{T�o�,�%/��YEE�O��?��|�?e�X"���/�t��~-m[�vԂ9�͸5(; �q��~��6���y��
```

---

## .git\objects\4d\e6a540c67703f9027e28574ddd1e25d6f0c234

```text
x�SMo�0�_1�d�(�p�RmZq)TZn���LC�I��V�>ʁSdϛ7�=O����˗ϔ�z8��{"�7ԆK��4�p�=j��{ғ�`�Β��`��/��ko~�m|��
��[�A��[ӿ��p�pV֒4�j�2X�:����#��^d��s�a9g�J� �G׀�a�e��&(|�x���ņi�N�*s_�Ň�,�Ks	�����HU�@��J�֋��ᨡ�X��Q/���_���*�$�q>J^����X_��9�#�71���;V��+eZ|d����\�\�[s&���hO(ɴ��ŋ�,+�=�W�;�h�ȝ��y	�MFB�������r�r�A�S�9;�wK U��_sA�g��:[S���I̋�{�0��"(�M=OcKx����UG�����'�Ӱ&2nJpi����\f��x
����ظJ�d��=���������*�
```

---

## .git\objects\4d\f7f66744d2a3b9e42b50e8de8caa62671c0e1e

```text
*Binary file*
```

---

## .git\objects\4e\9f8271c9879f43729f921e83506d3c57590c94

```text
*Binary file*
```

---

## .git\objects\50\d5f6e245b37b0aee5d66e4f518df620c7c109c

```text
xmRMOA�̯ {4FL��"	F�ȑx(����N'3]�����KWo;�^��^;�<���ܞ}u���p��bx�B�bv�M����-�;s\�õd?�7�l�T�'$�_�,a������s�$ ��}+��Ff��#�"��Ŏ�*-�X��Gπb�U��^E2@�Z�a�U߸�(Ղ=R[�`-�&'%
�Ρ�2��1(()��I�ws�0r��d��Z��x�܃����vb0W�ʛ*q���d��K�h��������Ͳ�H #ϵ�ز<g�7�ѩ�m��b�z;�Pa��XӰdH�n�2s�����ܓ+rͱ�m3�2p�(U	��MV$�l���o�����v���(��m��b�
```

---

## .git\objects\50\ed663ae972f5d76d4e056a9351de69ffc6e157

```text
*Binary file*
```

---

## .git\objects\54\51af1978940e12010f90d728fc55c2a3875c6f

```text
*Binary file*
```

---

## .git\objects\56\b58a29b37179fc9fec7b9b12b92a1a1c8eb4af

```text
*Binary file*
```

---

## .git\objects\57\a5d0de00372b308241f7eac5eae5fc1d6e87f3

```text
*Binary file*
```

---

## .git\objects\58\5be065fef75e8a2ad4a870bb1fc7c62865ff5b

```text
*Binary file*
```

---

## .git\objects\58\8cea5da0c8dba60fed4c6f1d955eea291a4c3e

```text
*Binary file*
```

---

## .git\objects\58\dee31d5b13390465f340f8084e169b32508cdc

```text
*Binary file*
```

---

## .git\objects\5a\97b635520b9a2ad88205535eaf647936c43bee

```text
*Binary file*
```

---

## .git\objects\5a\a987c52851014a3e7d53d274b1ce24709dab00

```text
*Binary file*
```

---

## .git\objects\5a\de0bd8460f263bd38fbf291207024d4c063464

```text
*Binary file*
```

---

## .git\objects\5b\2a8f2e4195b3d653ac56de9f733f583252a7a0

```text
*Binary file*
```

---

## .git\objects\5c\cab57268bba0314750cd2770180fa763e01593

```text
*Binary file*
```

---

## .git\objects\5d\a32fcdb43a7c7f85282b5e828f5382725db455

```text
*Binary file*
```

---

## .git\objects\5e\a6e086784d07fabea6cfb9492da27507a4fbbc

```text
*Binary file*
```

---

## .git\objects\5f\15d47bbc0ce26945db8dec79d5754a347188bb

```text
*Binary file*
```

---

## .git\objects\62\c75bd6e19f5c8193dcb6bafaaacd5e7a97a07c

```text
*Binary file*
```

---

## .git\objects\64\0c4cec194533e73af7f667e91df932129928a0

```text
*Binary file*
```

---

## .git\objects\64\74f0e18ee791902087a9da0661973768b17857

```text
*Binary file*
```

---

## .git\objects\64\f86c6bd2bb30e3d22e752295eb7c7923fc191e

```text
*Binary file*
```

---

## .git\objects\69\048804930f746bc64dffc0d31cac094577b688

```text
*Binary file*
```

---

## .git\objects\69\0ad1cfbe46906f5621c0f0246963a9e791f344

```text
*Binary file*
```

---

## .git\objects\6a\d10f84b9edac946876d0b562fd5ef5c8f7523c

```text
*Binary file*
```

---

## .git\objects\6b\a24c88f18bba88f7dd46559527328640fce30e

```text
*Binary file*
```

---

## .git\objects\6c\28592fed04f49b33257f2ee5a78b63e268c181

```text
*Binary file*
```

---

## .git\objects\6c\2c643454db90709a8716c5808addbc3e9bc2ab

```text
*Binary file*
```

---

## .git\objects\6c\350d669ceb044a6090864e24afc9124a5eb342

```text
*Binary file*
```

---

## .git\objects\6d\789f65397e6ead108fc976c232fb402bf9e6cc

```text
*Binary file*
```

---

## .git\objects\6e\bb68c1bdb14c2db305ad52141111b8755bc1f0

```text
x�T�N�0圯�[�$��A%ĉ�g�ڳ�d����P����.�X��KbOf�{~�ʢ����8�KpNC`�:��.0����>#��{�ô`��b��ek���C��ã�-�=�i���s������R��T~�=�t�@�e4��Ӂۥ�OJ����}8��:�o,��Fy��&��؂��
�8e����Y����z�CU�L�o���>ٔ�Ź�nV�D��{O�Q�f^��9y��s��v�����'�mi��G+*��>�y �:�(�&��4�^֙��D�
}V*�Ԛ^�BWƯƹ�<�F�OQ�d&8�h��Q�w��KP�Kw����m�t�'x ������W��jǡسJy*C���K��n�+MH�,5�m��%ԭ�q?)�w`S��O~�y��K�jO�:{7G�o
```

---

## .git\objects\6f\36fafc7f597312ce0ceb405ca6b97afe25b72c

```text
*Binary file*
```

---

## .git\objects\6f\478faf145adc417061cc421e6ceccb35ecc286

```text
*Binary file*
```

---

## .git\objects\6f\4fd523af696c19290a337d30fcfc7402994cde

```text
*Binary file*
```

---

## .git\objects\6f\9ba0d6ca9d2d4d34f544cdc3d439f75a76a476

```text
*Binary file*
```

---

## .git\objects\70\57a1a89cad2e2338fd4f89ca4b18718e27c8e8

```text
*Binary file*
```

---

## .git\objects\71\12197e8e3195c914aa4d80b8519942e6c71822

```text
*Binary file*
```

---

## .git\objects\71\16fbd1cdcebeb839b5e615711f981e9859e259

```text
*Binary file*
```

---

## .git\objects\71\944f90e21f925eaccc27ef124de6576c0b0c31

```text
*Binary file*
```

---

## .git\objects\72\9a9791a789dd757313ffc6315ff554b0c2097c

```text
*Binary file*
```

---

## .git\objects\72\fc12029afa2f7ad55319dbba76bfaea9abb510

```text
*Binary file*
```

---

## .git\objects\74\2aadb93402d326b70fbf223006e201973cc5f1

```text
*Binary file*
```

---

## .git\objects\74\307d289b0eadd0be5500d728696c72ea773dc8

```text
*Binary file*
```

---

## .git\objects\74\ef4eef737d2a83e532283c49918ffaafe01214

```text
x+)JMU061a040031QHN,*���OI��+)f�P����jN��eU���x��$5=����/�Vp�9���E��:+R_=U�_��Z�P�ǐ���kY�D�+K6�<���LeIB�'�],�J}��wo������f@�委&#95G#R�-˗�ƪ�zO�w'?�8�U[\�������|�_�#����v�Y����v������<�3��?��N?�ʷĜ]�>0:�o(��,-F�ל7����b�����^�#�]�8���
```

---

## .git\objects\77\a235f6b31c1166d9064931e3fe86d9e33ee5d1

```text
*Binary file*
```

---

## .git\objects\78\e54256284ff9d20dfa8985545f84f6162a66cc

```text
*Binary file*
```

---

## .git\objects\79\d941dd87dcd5e3a2977736e4819e7b89e22437

```text
*Binary file*
```

---

## .git\objects\7a\92d66bb0edc08fed89c9f6aa37092e4bb48bcb

```text
*Binary file*
```

---

## .git\objects\7a\fa05f8021d37ed563b4a5b63bac5d1365ec7ea

```text
*Binary file*
```

---

## .git\objects\7c\c69019d382099f1a90d7192745eb6a2dc0075d

```text
*Binary file*
```

---

## .git\objects\7c\da1daacf97d1b8ae63bef216ed04b25921b6d9

```text
*Binary file*
```

---

## .git\objects\7f\3d72131eac16a151b734c42f7f2d8aa41a3cc9

```text
*Binary file*
```

---

## .git\objects\80\0ab6626a93cf841dafe1a987bdd34a3da7fcf3

```text
*Binary file*
```

---

## .git\objects\80\245ad2ec9f4b7ff6e7763239cec15b6ef93fbb

```text
*Binary file*
```

---

## .git\objects\81\00a42dd9021158f9c8fd84bb090b22fe3e5658

```text
*Binary file*
```

---

## .git\objects\83\df8495aa64011093af82de87beacff1576a059

```text
*Binary file*
```

---

## .git\objects\84\4a1eed561a38fdd36f04754d456491ebc48ba7

```text
*Binary file*
```

---

## .git\objects\84\a6be521568840ae779c3fa439a3146bccd0274

```text
*Binary file*
```

---

## .git\objects\87\3de8ac4d8e77fc827e4f3939f0068391a3800c

```text
*Binary file*
```

---

## .git\objects\88\269fd2d4a57b0929d0e1ee6a7a70988ad681c4

```text
*Binary file*
```

---

## .git\objects\8a\2443d863107636e9ec14988a89900633929a8d

```text
*Binary file*
```

---

## .git\objects\8a\6ee4b5487b1441f94b93fd1ff37cf2739b1524

```text
*Binary file*
```

---

## .git\objects\8b\ef5fc25b38a053d7e4ef4cd30b0897c2523e8e

```text
*Binary file*
```

---

## .git\objects\8c\a590906118fc3f6789f7de5c0888ddb97d8118

```text
x=���0�=�)����r���^8=�-���v�]����9�Of�Ѡ�C���i��P��RF������zM�WT�������o{�h�	]R�rZ���I�UP0��9�g��B#8-��&��C��T��"mw/5?$�Cͨ���:�����%MC@���
6�/G�N>
```

---

## .git\objects\8e\55da537f901e3f7c2c61a26d012ca865e3d5cf

```text
*Binary file*
```

---

## .git\objects\8e\c88bfb9adb95e0b4653237daa69c6970add53e

```text
*Binary file*
```

---

## .git\objects\8f\0f65f7e7f7a77781af65d82501109530d444f4

```text
*Binary file*
```

---

## .git\objects\8f\f759f69f5c98c4cba2f143f97e11c24a74952c

```text
*Binary file*
```

---

## .git\objects\92\7d7cca0badb13577152bf8753ce3552358f53b

```text
xE��� E����D;��.u���s�gC<�@c����{ιƳ��xظ�X
V\�B�L�*��z��˒w�C��J��}Zk��3.)�H��V�TF���\�Ź̀PyI�nw��������1/
```

---

## .git\objects\93\3be8e2dbda657634a25086afa6f8553f75b612

```text
*Binary file*
```

---

## .git\objects\93\aa47dd5673a7c37eaace98fc1de4d75008c59a

```text
*Binary file*
```

---

## .git\objects\93\ae535434401752d02b39971f80cfe7546c0745

```text
*Binary file*
```

---

## .git\objects\95\a608deedb3c1edbc7ffd7fd4e91060c5cccacd

```text
*Binary file*
```

---

## .git\objects\95\ad319f173b516aa5e74a8b50c6e5972ac8f29f

```text
*Binary file*
```

---

## .git\objects\96\55910d4a681883d3e04666b711da55b1e60ff7

```text
*Binary file*
```

---

## .git\objects\9a\4a593a7fe2144e22f6b0fcfb48f5eaea7ad2e7

```text
*Binary file*
```

---

## .git\objects\9b\4230760175c1af9da3797dd632880e58f94caa

```text
*Binary file*
```

---

## .git\objects\9b\c32736cf1afedc13767ba42498ae7294e9053a

```text
*Binary file*
```

---

## .git\objects\9c\12f9656258a21b482474e5ff62d2cacf62fcaa

```text
*Binary file*
```

---

## .git\objects\9c\6bf0358142da594326958408f018da70e49400

```text
*Binary file*
```

---

## .git\objects\9c\a0d8b7c51b1fd4362121a0d02e82e24abaef0b

```text
*Binary file*
```

---

## .git\objects\a0\6326d9d6c889a3bbfd89581428b2f50a8f484d

```text
*Binary file*
```

---

## .git\objects\a0\f85eb93d7bb6f4aad7f2c2aaa439f37e3128d0

```text
*Binary file*
```

---

## .git\objects\a2\0502b7f06d848452da0d93ce8830c1d86b05dd

```text
*Binary file*
```

---

## .git\objects\a2\1277e147202edbe462d4a6534c574b23d463b7

```text
*Binary file*
```

---

## .git\objects\a4\42ab975fc37222ea50ea0a8e41546ac4b7a148

```text
*Binary file*
```

---

## .git\objects\a6\8b98fbc1974a79d6a2420052c72d88d591f5ae

```text
*Binary file*
```

---

## .git\objects\ab\a29b0e7fc2bf29ccdb90b6e28aea6b11e60167

```text
xm��n�0�{�)�����R�z��T�VE}���$+�eo�QŻ�	A�1���<kg���e4��DQ�����}Z!6>~���A�8�5���p�w�_*��Y���-�k�~�ZC���tg�IW�)
��ŤFб�)D�`~��&sT���+�`�U���"���0�n�9\Cqg�Q3�l��Ak�.�FJR\A�%�n�pJ���r�4|�V�v
��k̵L�5��ǜ�y�x�q�(tdT�����_���,)Q�{�8R���n�^��3%�r�M��)R3�c�܆CcM�dl����k�-�L��]���}��YP�t\e �O�rK��.*����0��Q��
```

---

## .git\objects\ac\5fb6cbf4d6c5d670888f7e579b93b805af2ddc

```text
*Binary file*
```

---

## .git\objects\b1\1157c09ca58d9edfcdde7290c28e6b1de78be2

```text
*Binary file*
```

---

## .git\objects\b2\72e0286fe32d53e4f92d386f480be7688584ad

```text
*Binary file*
```

---

## .git\objects\b3\845e122b3886725e99b9759f392804c8288b24

```text
*Binary file*
```

---

## .git\objects\b4\a6624966924d345bf98fa30ea28ddf7eeb4966

```text
*Binary file*
```

---

## .git\objects\b7\a249b88de6388540e70d31d2542e500d2b26e5

```text
*Binary file*
```

---

## .git\objects\b8\015aada287cd50677f6752a39ceb2feeb60b75

```text
*Binary file*
```

---

## .git\objects\b8\3bcfaa0203cbc4ae716526a51612ba98462c32

```text
x}��J1�=�S̭)T�
^����*�d��7�0����www�V��̄��Ϥn��������p��}�p�-���iuJ�L:�-��4�-FeP�*�B�򓏼��:_[��sd�A��{er�}��z'�����S��ь�[awL��Y�����?2¡����j��1��A{{Il{��P�M��D�=��Ge����a_J����`���L�dbt�9_�����ע���ov��.��	'_�3�M��Ǆ:_�&��
```

---

## .git\objects\b9\2f0d90b0aa108f57c967c0af68451cdb4c4beb

```text
*Binary file*
```

---

## .git\objects\b9\607d3998df80c7cf534d47e7990d9f73b4e6aa

```text
*Binary file*
```

---

## .git\objects\ba\99427d4c53dc3753591e7ecfe3c37b00784156

```text
x�TMO1���bnh�ن�	^@HHL����1fY*.vwH[@$�w�-�u5�DKwf�̛�ם�C�ݾ�(�5J���Fp8�
Zݚ+�R���ºu����F�N�ܖE��XN�L9s3����(�>�	PxO��Q��,c��GVY�1�n� :6ٝ{Y�tz���|���(�����2y��\1�����T��&�(r��c�����P��.����#c��gν��y8���y@JW4�nr��f:Nli�-ޞc�W��,?r]b��|q�~.Ok��IY�#�K�$�^� )ՁG�A��SJk��r��q�+@$h�HB���P���0�"�`��|�e��ro3B�w��?{�X�5���O�������w���?�R��v&�r������me�B�l
a+=^%��~A
�ڒvˀ�1�S�}s
```

---

## .git\objects\bd\9ca8e1fe9538e94cda95d7a772da0cd9b73d96

```text
*Binary file*
```

---

## .git\objects\be\7c5f6a4abd62916b27ca976c2bd335bed18c42

```text
*Binary file*
```

---

## .git\objects\be\c4b70bc1614fc3b3c50b32b84af98dd1e1c005

```text
*Binary file*
```

---

## .git\objects\c0\fcbf9b0e7e2f59d4f6616cbadef001426fb075

```text
*Binary file*
```

---

## .git\objects\c2\075bfb45778b468674d146a739b749be2efc36

```text
*Binary file*
```

---

## .git\objects\c5\c2616d60c6137b4e46ad3145e62b361f2b51a4

```text
x+)JMU041g040031QH��/M��K,��+(�/�LI-�+)f��}iWͷ%{���kö�:�^���H��I--��OL���O)�I��>u�}�P��]�\�>��nۮ��`�/N-*�Lk���z�x�����'�9*�-�%�4��;�
```

---

## .git\objects\c7\6116494a462e37ac822d17bbab1ecb7e287fb0

```text
xmP�N1�ܯN�$D.\��x�`b?�]�.ٶ��
F8�`��0�Hb�G���ol+`�����{3�Ir��q����@*�[��>K5MrVsgـuEO*�CuQr&�)ӴK5��ힳ���x���Τ��	zJrDm��~QO%�RD-B�?q��Q�NsZ�\�<4˽^�X��å˙7-~�	y�6]|M�5A�M|��'p5\�:����ڼک����ܬ`�͛�ޑf�-�����ޙ���x7��y�8%w����.��í>"�Ϡ��rmYq%��x�����6 ܕ�C6���8ڕ����V���`2!a(�K%�<1!��[�
```

---

## .git\objects\c8\5344bcd8cadb8a0546606bd7c62d08a1d24b64

```text
*Binary file*
```

---

## .git\objects\c9\9e7c2986289b159013dce372efb779d4464640

```text
*Binary file*
```

---

## .git\objects\ca\d55c5d1dfaf71a74186e647c8942fe032a3896

```text
*Binary file*
```

---

## .git\objects\ca\fcf1875fb63456197b953f862c02942235f03f

```text
*Binary file*
```

---

## .git\objects\cb\53c38165c00887809821caf5e16b8b252da60a

```text
*Binary file*
```

---

## .git\objects\cc\859267555095d091208e8eeb930fe2d2078c74

```text
x]P�N�0䜯�[�r/�@��Ǒ���޴FI�����8��[��ٝ٪�6��+���1�x!ϫ�6����cCP;�"�u�����PMo���t�L�d�/]�U@����N4y�LE"���
"C��9b,�)���j��TQ��NE:@��3��q�/@��4<�R9*�Ɯ��b=��ٓ��|��h��j��T��MC"���+�e���Fʭ�>A�԰H��bASm:�V�gO�Ų�L�����9�{���hW��
```

---

## .git\objects\cc\e879ee622146012901c9adb47ef40c0fd3a555

```text
xE����@�=�S�7[�
",襲����٬;�t2d�(��nt��B�ߟc�#V�Y�3�b�''��d�/R���1o�+K�}�i�uob���<��Ͳ˹)�[˺v�V����Ǯ>18�s**g�,U�p� �}s�7��նy����0:C[{�
��b���d!��j�Hϒ���4����[�G7�;,Z`
```

---

## .git\objects\cf\273433aec7c2a17bbee33c5215bdf50ad99e6c

```text
*Binary file*
```

---

## .git\objects\cf\57164e40494ef2bb7a74d6a4e2818200109ea9

```text
xeP�J1����[wA��ĊT�����f��e�Y2��R���ƺM����;MG���\m}OQ�/a�Nl�!����a�
Ȳc��{
����OK�N>�'�
��L�ƞ�:�Ӓ����Ln����Z�ެ?�j����7�^�k)�)�c��M�X"~�\���x�:׮j����Y�)ZQ���e����(�G�(��.��:�$Uٶ��!.$��C�q��ˤ9�t6�l0�G�Pʳ�8	�eh�X��a
��C	��|��
```

---

## .git\objects\d0\9f14f5e1eca5a96277ec5ed9929156a6e8714d

```text
*Binary file*
```

---

## .git\objects\d2\2f3890a380cea30641cfecc329b5c794ef5fb2

```text
*Binary file*
```

---

## .git\objects\d2\bb49928733bbecfb8dd67b772804648a2913a9

```text
*Binary file*
```

---

## .git\objects\d3\4fab4389ee169bd0cf034f3ebe02aef6d9dd81

```text
*Binary file*
```

---

## .git\objects\d5\fa35c31fd5576f3ac5ba8dea96a66a8902c81c

```text
*Binary file*
```

---

## .git\objects\d6\7941513e81fae7543d7a23a2c36ff10d7a8829

```text
*Binary file*
```

---

## .git\objects\d6\d6eca98adf09f70db4a863e0c501c5aefa549e

```text
*Binary file*
```

---

## .git\objects\d6\ddc97183970115621c31f45158dca2ee1f70c8

```text
xePMk�@���bn& (��*b�J�?�l��dw��,��n�&q�Ǚyo�GYS	�o/��k(\`�OhŔ5B?��7YN\Xr��|�&�G���ol��B�w"��G�k��
T�V>ɶ�,`X��zo�]_���-�hn����u�NF۽�c���Ljs/ ��c-�6̣�$,�}�����!�.
����SS���${̞�b�O������Hϗ�F�:u�ިf
```

---

## .git\objects\d7\44a304c083536b6c89dc83f1c72c826dbea198

```text
*Binary file*
```

---

## .git\objects\d7\95af3f8a127736dd4a6d308e22cd46b6d6453c

```text
*Binary file*
```

---

## .git\objects\d7\ccc531f583d925baf8b66c5798e83d14a526c4

```text
*Binary file*
```

---

## .git\objects\d7\da8f7f0dba3e780c44fbe20b4ba3610ebc6d65

```text
*Binary file*
```

---

## .git\objects\d8\3631e0d5e538bfe72cfcaa51adbcd3e557d5f4

```text
*Binary file*
```

---

## .git\objects\da\e85283dcab09ad7991a1c34294ed4a03ee5963

```text
*Binary file*
```

---

## .git\objects\dd\ab6223c019cd9ab266b2d423c1a4babea57848

```text
*Binary file*
```

---

## .git\objects\e1\9e6f371f78990806ba187ab1743117f46cea4c

```text
*Binary file*
```

---

## .git\objects\e1\e9956892f312de36085a26c7912ac7679cbaba

```text
*Binary file*
```

---

## .git\objects\e2\2347cc16a30819a2434443d96ffef7c18097e1

```text
*Binary file*
```

---

## .git\objects\e2\4f66c3a9e9ada180db6affe65850d88691d495

```text
xm���@D��+�C�0���P��;X	�c��j$��8��jg��3�*R���n�0t���%���+�Y7�:eS���0�!�*i��-�2�L&��qo�3��8�����!6(ӗ��)ȴ'&��q*[�~n��}-5�`���q�_>�C�7�Č�<��]
T�
```

---

## .git\objects\e2\d43fc5552160c20c4ff70485290b1b927399a2

```text
x]��
�@����s�*ނ.A=��z�uwc�vF0�wO�:���}M��suh#SR��I[F���(Bv�P�-e���s��d��[B�X'�ӻ���-)�^i��e�+O����������d�$PDR
```

---

## .git\objects\e3\6a14938f6a23f28e87064f85cae83cd32bd281

```text
*Binary file*
```

---

## .git\objects\e3\75df1e79073b7a20eb15b376d793cf82ccc046

```text
*Binary file*
```

---

## .git\objects\e3\c8ec20eb7fd525ee6cda57952ebbf475dc0ea6

```text
*Binary file*
```

---

## .git\objects\e5\7edfcd855fa700fba1dffdfdc74ca4b9f2194a

```text
*Binary file*
```

---

## .git\objects\e7\6278af4a06596952ac460192f03c3f99a87992

```text
*Binary file*
```

---

## .git\objects\e8\406921c38e3f57cee625e4161f1d6996cf78bd

```text
*Binary file*
```

---

## .git\objects\e9\d912f3e3cefc18505d3cd19b3a5a9f567f5de0

```text
xE�A
�@E]�Cp��ԍ����U�6ʔ6�I����f��&����T-Wn�YOމs�q�lq�[,zE�$�uGhRg�)v8��̺���a�(���C�H�k��ޱp��<�L<\Hn:��K8狲�g�i�f�5���0<$C�s7q
```

---

## .git\objects\ea\8a6d3f9322a07d992c2a06599c47d161033409

```text
*Binary file*
```

---

## .git\objects\ec\231a2f3f948b6d4c582c3510b07972eecb8150

```text
*Binary file*
```

---

## .git\objects\ef\cbaf9deb9113b011b5ae1d690d2bc39e0d5747

```text
*Binary file*
```

---

## .git\objects\f1\cf5d2d431912d4a609d932e9bf95288fef02b4

```text
*Binary file*
```

---

## .git\objects\f1\e3e620ab7120c6dccf4aca0f528ed93788e3e4

```text
*Binary file*
```

---

## .git\objects\f2\3cba04e0c2251af7b40edea2dfcde2612e3e98

```text
x�SMo�0�_1�����"!U)����*mo�CjO��ؓ����;!*m�"{޼y�yr��-���{��@��	���9�"z,���P�AQ���Vx�#L�YҐ�:���z��/����(m�Q~"4�6�>���� ͸ڡV����*x�󈬮gY �ֹl7��x�YP�׀�a�d��&(|���S���b�8`o��+��}P��\B0�>p=R���o��u�E��pT���(X��q���G���+[E�q>�^�n��Xޡ9�=ُ1������+e$>��'/}g0��ڜ
;��<�
2�;{��u�|�H��=�,�ka^B�F#�FxE�M�TuP��r�r�C�S(��-曹��|[��9���3�l��Ib���,���W��]V�����%<c����#���[�ƓOiX�%����vI*��K<�,�:6.S$Y7~O��\�p��F5*�
```

---

## .git\objects\f3\ec29e1415663038c0976951744bfbd1ec1bb4b

```text
*Binary file*
```

---

## .git\objects\f5\07e5604f7e0e0d174d9398383ff94a26e9e05a

```text
*Binary file*
```

---

## .git\objects\f6\5c299e348c208052b3b5747c003591a90c1c23

```text
*Binary file*
```

---

## .git\objects\f6\95ca9ddef153117940e1dd47e25436736397ae

```text
*Binary file*
```

---

## .git\objects\f8\d59042620f44b0692a8c87174ab9f5690e8951

```text
*Binary file*
```

---

## .git\objects\f9\2f3019bb192eb996d1f31c0793493458e59ec0

```text
xm�AK�0�=�W�mJ�����Mœx観K$�$����w�M6���4�}3�7�j����ݕ2Y=�Rs��,X�[t��	I�P�zd��f�S��G%�E�l����F��Lfq�|ǎ��dO�tV��'a/�B���/O�¤��e���?�����g1q.dR�8D9�_���NS����1b�bsb̇�<9��lk\�����+����]O��Q5h'���
Q����?tD]��*�������KI];wi����G���
```

---

## .git\objects\f9\aa683b1ad5cffc76da9ad4b77c562ac4c2b399

```text
x5���0D��Q��:!ub`��Pc�Ti�΄��$�X��;�i��m<}���,���r�u�j���M(=%Ɓ���^!wiP�(5���&�;@zK�0��H[K��CD�s��ړ��ƈ�s�G��*��0��W�9
```

---

## .git\objects\fa\9fc04d4d4ff2a61f257631455bef929e3e3e36

```text
*Binary file*
```

---

## .git\objects\fc\310b08daeb041d1e6141d8a974b374e094e8ce

```text
x�UKk1�ٿbzr�.���iL�Chy@Zz(%Ȓl+��#ؘ��������y~3�i��f	��|��A��X{�1zm��7��+������n�"���Po�^`e�����?�F��٤��c�,�]׾������w����syK�-�&��VQq�aA���(m�17y����Y�P�I��Q]�3��mj�A��e�>x⃃����r�0ͧi�B�m����F�&�h�I���gn�m��T�h�e�t礰|4ˊ�!�{��ݾ�~cX���H@�dp����V�4�����FCA���Q��J���"��d^(=Q����{z��+�憥��I��:�$��O��kVV2��ܣ�_؜Ch�H����qH�;l��W�Z$0���m�F>��HyP��s0q�h���c���Y��?x+�z<F�1�c�lRu�w&�Y��{�_� ���u�4rk2�1��G0��������� �Bh3��u�G4�o�H��Ǽƈ���{$�?+gХi�R
�(�ZY�K&���d�iE��n��DWxAJ�VD�D|\D0��6#�]���Rʣ�o*��<��䕱��UT�q�"�w��gF;_f�/�yY�eM��r��W�.��=Ic<Ep�'-SиfG���y�_G�#Ƿ|p����B8��?X�>�,���Te�tL�ռT��mB��C�%O+=i�'ӿ~u�%����?9USu
```

---

## .git\objects\fe\a26f70d80d04c40886eaf5885c9c6daf70883a

```text
x]�AK�0�=�W�mJ���,�WA�(v�*I�L��R�ߝ$M���0�y�������݈`�<�X3|:�l�÷W��a�(*��Sx7t�u���\�>����@h��:~��Yk�̈�H�������mk�|9�8��\R�17�W���R#��ص7��.���*�e�Ow=	��?�G���v���?*��D��Nl>y!�B���0�a�ڌ<s1`r�m��'Ǽ:L��o���
```

---

## .git\objects\ff\c91b61b2fbe1fd8efd0c0124dad25841d9b651

```text
*Binary file*
```

---

## .git\refs\heads\main

```text
84a6be521568840ae779c3fa439a3146bccd0274

```

---

## .git\refs\remotes\origin\main

```text
84a6be521568840ae779c3fa439a3146bccd0274

```

---

## .gitignore

```gitignore
# compiled output
/dist
/node_modules
/build

# Logs
logs
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# temp directory
.temp
.tmp

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

```

---

## .prettierrc

```text
{
  "singleQuote": true,
  "trailingComma": "all"
}

```

---

## README.md

```markdown
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

```

---

## eslint.config.mjs

```text
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
);

```

---

## nest-cli.json

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}

```

---

## package.json

```json
{
  "name": "ecommerce",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "start": "node --watch ./index.js"
  },
  "engines": {
    "node": "22.18.0"
  },
  "dependencies": {
    "@keyv/redis": "^5.1.6",
    "@nestjs-modules/mailer": "^2.0.2",
    "@nestjs/cache-manager": "^3.1.0",
    "@nestjs/common": "^11.0.1",
    "@nestjs/config": "^4.0.3",
    "@nestjs/core": "^11.0.1",
    "@nestjs/jwt": "^11.0.2",
    "@nestjs/mapped-types": "*",
    "@nestjs/mongoose": "^11.0.4",
    "@nestjs/platform-express": "^11.0.1",
    "@nestjs/platform-socket.io": "^11.1.17",
    "@nestjs/websockets": "^11.1.17",
    "@types/bcrypt": "^6.0.0",
    "@types/multer": "^2.1.0",
    "@types/nodemailer": "^7.0.11",
    "@types/pdfkit": "^0.17.5",
    "bcrypt": "^6.0.0",
    "cache-manager": "^7.2.8",
    "cacheable": "^2.3.4",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.4",
    "cloudinary": "^2.9.0",
    "cors": "^2.8.6",
    "dotenv": "^17.3.1",
    "mongoose": "^9.2.3",
    "multer": "^2.1.1",
    "nanoid": "^5.1.6",
    "nodemailer": "^8.0.5",
    "pdfkit": "^0.18.0",
    "randomstring": "^1.3.1",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1",
    "slugify": "^1.6.6",
    "socket.io": "^4.8.3",
    "stripe": "^16.12.0",
    "uuid": "^13.0.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.0",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@types/express": "^5.0.0",
    "@types/jest": "^30.0.0",
    "@types/node": "^22.10.7",
    "@types/stripe": "^8.0.416",
    "@types/supertest": "^6.0.2",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^16.0.0",
    "jest": "^30.0.0",
    "prettier": "^3.4.2",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}

```

---

## src\DB\enums\user.enum.ts

```typescript
export enum Role {
  user = 'user',
  admin = 'admin',
  seller = 'seller',
}

```

---

## src\DB\models\cart.model.ts

```typescript
import { HydratedDocument, Types } from 'mongoose';
import { ProductModelName } from './product.model';
import { MongooseModule, Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { UserModelName } from './user.model';
// استيراد اسم موديل الكوبون لربطه بالعربة
import { CouponModelName } from './coupon.model';

// schema class
@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user!: Types.ObjectId;

  @Prop({
    type: [
      {
        productId: {
          type: Types.ObjectId,
          ref: ProductModelName,
          required: true,
        },
        quantity: { type: Number, default: 1 },
        price: { type: Number },
      },
    ],
  })
  products!: { productId: Types.ObjectId; quantity: number; price: number }[];

  @Prop({ type: Number, default: 0 })
  totalPrice!: number; // إجمالي سعر المنتجات الأصلي (قبل الكوبون)

  // ==========================================
  // --- الحقول الجديدة الخاصة بنظام الكوبونات ---
  // ==========================================

  @Prop({ type: Types.ObjectId, ref: CouponModelName, default: null })
  coupon!: Types.ObjectId | null; // ID الكوبون المُستخدم

  @Prop({ type: Number, default: 0 })
  discount!: number; // قيمة الخصم بالأموال التي وفرها العميل

  @Prop({ type: Number, default: 0 })
  totalPriceAfterDiscount!: number; // السعر النهائي المطلوب دفعه بعد تطبيق الخصم
}

// schema
export const CartSchema = SchemaFactory.createForClass(Cart);

// 🔥 تحديث الـ Hook ليتعامل مع الكوبون 🔥
CartSchema.pre('save', function () {
  if (!this.products) {
    this.products = [];
  }

  // 1. نقوم بحساب الإجمالي: جمع (سعر الوحدة × الكمية) لكل المنتجات
  this.totalPrice = this.products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // 2. التحقق من الكوبون:
  // إذا لم يقم المستخدم بإدخال كوبون (أو تم إزالته)، يجب أن نساوي السعر النهائي بالسعر الأصلي ونُصَفِّر الخصم.
  // (أما إذا كان هناك كوبون، فإن قيم discount و totalPriceAfterDiscount ستأتي جاهزة ومحسوبة من CartService)
  if (!this.coupon) {
    this.totalPriceAfterDiscount = this.totalPrice;
    this.discount = 0;
  }
});

export const CartModelName = Cart.name;

export const CartModel = MongooseModule.forFeature([
  { name: CartModelName, schema: CartSchema },
]);

export type CartDocument = HydratedDocument<Cart>;

// import { HydratedDocument, Types } from 'mongoose';
// import { ProductModelName } from './product.model';
// import { MongooseModule, Prop, Schema } from '@nestjs/mongoose';
// import { SchemaFactory } from '@nestjs/mongoose';
// import { UserModelName } from './user.model';

// // schema class
// @Schema({ timestamps: true })
// export class Cart {
//   @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
//   user!: Types.ObjectId;

//   @Prop({
//     type: [
//       {
//         productId: {
//           type: Types.ObjectId,
//           ref: ProductModelName,
//           required: true,
//         },
//         quantity: { type: Number, default: 1 },
//         price: { type: Number },
//       },
//     ],
//   })
//   products!: { productId: Types.ObjectId; quantity: number; price: number }[];

//   @Prop({ type: Number, default: 0 })
//   totalPrice!: number;
// }

// // schema
// export const CartSchema = SchemaFactory.createForClass(Cart);

// CartSchema.pre('save', function () {
//   if (!this.products) {
//     this.products = [];
//   }
//   // نقوم بحساب الإجمالي: جمع (سعر الوحدة × الكمية) لكل المنتجات
//   this.totalPrice = this.products.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);
// });

// export const CartModelName = Cart.name;

// export const CartModel = MongooseModule.forFeature([
//   { name: CartModelName, schema: CartSchema },
// ]);

// export type CartDocument = HydratedDocument<Cart>;

```

---

## src\DB\models\category.model.ts

```typescript
import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  raw,
} from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import slugify from 'slugify';
import { UserModelName } from './user.model';
import type { Image } from 'src/common/types/image.type';
import { ConfigService } from '@nestjs/config';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';

@Schema({ timestamps: true })
export class Category {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'category_name_index' }, // إضافة Index لتسريع البحث
  })
  name: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: UserModelName })
  updatedBy: Types.ObjectId;

  @Prop(
    raw({
      secure_url: String,
      public_id: String,
    }),
  )
  image: Image;

  @Prop({ type: String })
  cloudFolder: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

// Pre-save Hook to auto-generate the slug from the name
// CategorySchema.pre('save', function () {
//   if (this.isModified('name')) {
//     this.slug = slugify(this.name, { lower: true, replacement: '-' });
//   }
// });

export const CategoryModelName = Category.name;

export const CategoryModel = MongooseModule.forFeatureAsync([
  {
    name: CategoryModelName,
    useFactory: (
      configService: ConfigService,
      fileUploadService: FileUploadService,
    ) => {
      // --- Pre Hook: يتم تنفيذه قبل الحفظ ---
      CategorySchema.pre('save', function () {
        // تحديث الـ slug تلقائياً إذا تغير الاسم
        if (this.isModified('name')) {
          this.slug = slugify(this.name);
        }
      });

      // --- Post Hook: يتم تنفيذه بعد الحذف ---
      //الحذف من الكلاود
      CategorySchema.post(
        'deleteOne',
        { document: true, query: false },
        async function (doc) {
          const categoryFolder = doc.cloudFolder;
          const rootFolder = configService.get('CLOUD_ROOT_FOLDER');

          // حذف مجلد الصور الخاص بالفئة من Cloudinary تلقائياً
          await fileUploadService.deleteFolder(
            `${rootFolder}/category/${categoryFolder}`,
          );
        },
      );

      return CategorySchema;
    },
    inject: [ConfigService, FileUploadService],
    imports: [FileUploadModule], // ضروري لحقن FileUploadService
  },
]);

export type CategoryDocument = HydratedDocument<Category>;

```

---

## src\DB\models\coupon.model.ts

```typescript
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
// استيراد موديل المستخدم لربط الكوبون بالمدير الذي قام بإنشائه (نفس طريقتك في المنتج)
import { UserModelName } from './user.model';

@Schema({ timestamps: true })
export class Coupon {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'Coupon_code_index' }, // تسريع البحث عن الكوبون في الداتا بيز
    set: function (this: any, value: string) {
      // بدلًا من تحويل الحروف لـ Capital يدوياً في الـ Service،
      // هذه الدالة ستقوم بتحويل أي كود إلى حروف كبيرة تلقائياً قبل الحفظ
      return value.toUpperCase();
    },
  })
  code!: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy!: Types.ObjectId; // لتسجيل من هو الأدمن الذي أنشأ هذا الكوبون

  @Prop({ type: Number, required: true, min: 0 })
  discount!: number; // قيمة الخصم (سواء نسبة أو مبلغ)

  @Prop({ type: String, required: true, enum: ['percentage', 'fixed'] })
  discountType!: string; // نوع الخصم: نسبة مئوية أو مبلغ ثابت

  @Prop({ type: Date, required: true })
  expirationDate!: Date; // تاريخ انتهاء الكوبون

  @Prop({ type: Boolean, default: true })
  isActive!: boolean; // للتحكم في إيقاف وتشغيل الكوبون بضغطة زر

  @Prop({ type: Number, default: null })
  usageLimit!: number; // الحد الأقصى للاستخدام (null تعني مفتوح)

  @Prop({ type: Number, default: 0 })
  usedCount!: number; // عداد الاستخدام الفعلي
}

// --- إنشاء الـ Schema والـ Model ---

export const CouponSchema = SchemaFactory.createForClass(Coupon);

export const CouponModelName = Coupon.name;

// تصدير الموديول جاهزاً ليتم استيراده مباشرة في الـ app.module أو الـ order.module
export const CouponModel = MongooseModule.forFeature([
  { name: CouponModelName, schema: CouponSchema },
]);

// تعريف الـ Document الخاص بالكوبون ليساعد TypeScript في الإكمال التلقائي
export type CouponDocument = HydratedDocument<Coupon>;

```

---

## src\DB\models\order.model.ts

```typescript
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserModelName } from './user.model';
import { CartModelName } from './cart.model';
import { CouponModelName } from './coupon.model';
import type { Image } from 'src/common/types/image.type';

export enum OrderStatus {
  placed = 'placed',
  shipped = 'shipped',
  onWay = 'onWay',
  delivered = 'delivered',
  canceled = 'canceled',
  refunded = 'refunded',
}

export enum PaymentMethod {
  card = 'card',
  cash = 'cash', // COD cash on delivery
}

// Sub-Schema for Products
@Schema({ _id: false }) // نمنع Mongoose من إنشاء ID فرعي لكل منتج داخل الأوردر
export class OrderProduct {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productId!: Types.ObjectId;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ type: Number, required: true })
  price!: number;

  @Prop({ type: Number, required: true })
  quantity!: number;

  @Prop({ type: String, required: false })
  image?: string;
}

export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);

// Main Order Schema
@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user!: Types.ObjectId;

  // جعلنا العربة اختيارية (required: false) لأننا سنمسحها، والاعتماد الأساسي أصبح على مصفوفة المنتجات
  @Prop({ type: Types.ObjectId, ref: CartModelName, required: false })
  cart?: Types.ObjectId;

  // مصفوفة المنتجات التي ستحتفظ ببيانات الطلب حتى بعد مسح العربة
  @Prop({ type: [OrderProductSchema], required: true })
  products!: OrderProduct[];

  @Prop({ type: String, required: true })
  phone!: string;

  @Prop({ type: String, required: true })
  address!: string;

  @Prop({ type: String, enum: OrderStatus, default: OrderStatus.placed })
  orderStatus!: OrderStatus;

  @Prop({ type: Number, required: true })
  originalPrice!: number; // السعر الأصلي قبل تطبيق أي خصم (للتوثيق)

  @Prop({ type: Number, required: true })
  price!: number; // السعر النهائي بعد الخصم (وهو المبلغ الفعلي الذي تم دفعه)

  @Prop({ type: Number, default: 0 })
  discount!: number; // قيمة الخصم بالأموال

  @Prop({ type: Types.ObjectId, ref: CouponModelName, default: null })
  coupon!: Types.ObjectId | null; // ID الكوبون المُستخدم في هذا الطلب

  @Prop({ type: String, enum: PaymentMethod, default: PaymentMethod.cash })
  paymentMethod!: PaymentMethod;

  @Prop({ type: { secure_url: String, public_id: String } })
  invoice?: Image;

  @Prop({ type: Boolean, default: false })
  paid!: boolean;

  @Prop({ type: String })
  payment_intent?: string; // for stripe integration
}

// schema
export const OrderSchema = SchemaFactory.createForClass(Order);

// model name
export const OrderModelName = Order.name;

// model
export const OrderModel = MongooseModule.forFeature([
  { name: OrderModelName, schema: OrderSchema },
]);

// Orderdocument
export type OrderDocument = HydratedDocument<Order>;

```

---

## src\DB\models\otp.model.ts

```typescript
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hash } from 'src/common/security/hash.util';

//Schema class
@Schema({ timestamps: true })
export class OTP {
  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email!: string;

  @Prop({ type: String, required: true })
  otp!: string;
}
//Schema

export const OTPSchema = SchemaFactory.createForClass(OTP);

OTPSchema.index({ createdAt: 1 }, { expireAfterSeconds: 120 });

// hooks

OTPSchema.pre('save', async function () {
  if (this.isModified('otp')) {
    this.otp = hash(this.otp);
  }
});

//model name
export const OTPModelName = OTP.name;

//model

export const OTPModel = MongooseModule.forFeature([
  { name: OTPModelName, schema: OTPSchema },
]);

// OTP document

export type OTPDocument = HydratedDocument<OTP>;

```

---

## src\DB\models\product.model.ts

```typescript
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import slugify from 'slugify';
import { CategoryModelName } from './category.model';
import { UserModelName } from './user.model';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import type { Image } from 'src/common/types/image.type';
import { SubCategoryModelName } from './sub-category.model';

@Schema({ timestamps: true })
export class Product {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'Product_name_index' },
    set: function (this: any, value: string) {
      this.slug = slugify(value); // توليد الـ slug تلقائياً عند إدخال الاسم
      return value;
    }, //Category بدلا من الهوك في الـ
    //بدلًا من كتابة كود يدوي في كل مرة تنشئ فيها منتجاً جديداً لتحويل الاسم إلى رابط، تقوم هذه الدالة بالمهمة
  })
  name!: string;

  @Prop({ type: String, unique: true })
  slug!: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  createdBy!: Types.ObjectId;

  @Prop({
    type: {
      secure_url: String,
      public_id: String,
    },
  })
  thumbnail!: Image;

  @Prop({
    type: [
      {
        secure_url: String,
        public_id: String,
      },
    ],
  })
  images!: Image[]; // مصفوفة صور المنتج

  @Prop({ type: String })
  cloudFolder!: string;

  @Prop({ type: Types.ObjectId, ref: CategoryModelName })
  category!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: SubCategoryModelName, required: true })
  subCategory!: Types.ObjectId;

  @Prop({ type: Number, required: true, min: 1 })
  stock!: number;

  @Prop({ type: Number, required: true })
  price!: number;

  @Prop({
    type: Number,
    min: 0,
    max: 100,
  })
  discount!: number; // النسبة المئوية للخصم

  @Prop({
    type: Number,
    default: function (this: any) {
      return this.price - (this.price * this.discount || 0) / 100; // إذا لم يوجد خصم، السعر النهائي هو سعر المنتج الأصلي
    },
  })
  finalPrice!: number;

  @Prop({ type: Number, default: 0, min: 0, max: 5 })
  rateAvg!: number; // متوسط التقييمات (مثلاً 4.5)

  @Prop({ type: Number, default: 0 })
  rateCount!: number; // إجمالي عدد التقييمات (مثلاً 150 شخص قيم المنتج)
}

// --- إنشاء الـ Schema والـ Model ---

export const ProductSchema = SchemaFactory.createForClass(Product);

export const ProductModelName = Product.name;

// export const ProductModel = MongooseModule.forFeature([
//   { name: ProductModelName, schema: ProductSchema },
// ]);

export const ProductModel = MongooseModule.forFeatureAsync([
  {
    name: ProductModelName,
    useFactory: (fileUploadService: FileUploadService) => {
      ProductSchema.post(
        'deleteOne',
        { document: true, query: false },
        async function (doc) {
          await fileUploadService.deleteFolder(doc.cloudFolder);
        },
      );

      return ProductSchema;
    },
    inject: [FileUploadService],
    imports: [FileUploadModule],
  },
]);

// تعريف الـ Document الخاص بالمنتج
export type ProductDocument = HydratedDocument<Product>;

```

---

## src\DB\models\review.model.ts

```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user!: Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  product!: Types.ObjectId;

  @Prop({ required: true, min: 1, max: 5 })
  rating!: number;

  @Prop({ type: String, trim: true })
  comment!: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

ReviewSchema.index({ user: 1, product: 1 }, { unique: true });

```

---

## src\DB\models\sub-category.model.ts

```typescript
import { FileUploadModule } from './../../common/services/fileupload/fileupload.module';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import slugify from 'slugify';
import type { Image } from 'src/common/types/image.type';

@Schema({ timestamps: true })
export class SubCategory {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: { name: 'subcategory_name_index' },
  })
  name!: string;

  @Prop({ type: String, unique: true })
  slug!: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  updatedBy!: Types.ObjectId;

  @Prop(
    raw({
      secure_url: String,
      public_id: String,
    }),
  )
  image!: Image;

  @Prop({ type: String })
  cloudFolder!: string;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
export const SubCategoryModelName = SubCategory.name;

export const SubCategoryModel = MongooseModule.forFeatureAsync([
  {
    name: SubCategoryModelName,
    useFactory: (
      configService: ConfigService,
      fileUploadService: FileUploadService,
    ) => {
      SubCategorySchema.pre('save', function () {
        if (this.isModified('name')) {
          this.slug = slugify(this.name);
        }
      });

      SubCategorySchema.post(
        'deleteOne',
        { document: true, query: false },
        async function (doc: any) {
          const subCategoryFolder = doc.cloudFolder;
          const rootFolder = configService.get('CLOUD_ROOT_FOLDER');
          await fileUploadService.deleteFolder(
            `${rootFolder}/subcategory/${subCategoryFolder}`,
          );
        },
      );

      return SubCategorySchema;
    },
    inject: [ConfigService, FileUploadService],
    imports: [FileUploadModule],
  },
]);

export type SubCategoryDocument = HydratedDocument<SubCategory>;

```

---

## src\DB\models\token.model.ts

```typescript
import { ConfigService } from '@nestjs/config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserModelName } from './user.model';
import { JwtService } from '@nestjs/jwt';

//Schema class
@Schema({ timestamps: true })
export class Token {
  @Prop({ type: String, required: true })
  token: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user: Types.ObjectId;

  @Prop({ type: Date })
  expiredAt: Date;

  @Prop({ type: Boolean, default: true })
  isValid: Boolean;
}
//Schema

export const TokenSchema = SchemaFactory.createForClass(Token);

TokenSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });

// hooks

TokenSchema.pre('save', async function () {
  if (this.isNew) {
    const jwtService = new JwtService();
    const configService = new ConfigService();
    try {
      const payload = jwtService.verify(this.token, {
        secret: configService.get('JWT_SECRET'),
      });
      this.expiredAt = new Date(payload.exp * 1000);
    } catch (error) {
      throw error;
    }
  }
});

//model name
export const TokenModelName = Token.name;

//model

export const TokenModel = MongooseModule.forFeature([
  { name: TokenModelName, schema: TokenSchema },
]);

// Token document

export type TokenDocument = HydratedDocument<Token>;

```

---

## src\DB\models\user.model.ts

```typescript
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../enums/user.enum';
import { HydratedDocument } from 'mongoose';
import { hash } from 'src/common/security/hash.util';

//Schema class
@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Boolean, default: false })
  accountAcctivated: boolean;

  @Prop({ type: String, default: Role.user })
  role: Role;
}
//Schema

export const UserSchema = SchemaFactory.createForClass(User);

// hooks

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = hash(this.password);
  }
});

//model name
export const UserModelName = User.name;

//model

export const UserModel = MongooseModule.forFeature([
  { name: UserModelName, schema: UserSchema },
]);

// user document

export type UserDocument = HydratedDocument<User>;

```

---

## src\DB\models\wishlist.model.ts

```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type WishlistDocument = Wishlist & Document;

@Schema({ timestamps: true })
export class Wishlist {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user!: Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  product!: Types.ObjectId;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);

// منع تكرار المنتج لنفس المستخدم على مستوى قاعدة البيانات
WishlistSchema.index({ user: 1, product: 1 }, { unique: true });

```

---

## src\DB\repositories\abstract.repository.ts

```typescript
import { Model, UpdateQuery, QueryFilter, QueryOptions } from 'mongoose';
export interface IPaginate {
  page: number;
  limit?: number;
}

export type finderOneArg<TDocument> = {
  filter?: QueryFilter<TDocument>;
  populate?: any;
  select?: string;
};

export type findersArg<TDocument> = finderOneArg<TDocument> & {
  paginate?: IPaginate;
  sort?: any;
};

export type updateArgs<TDocument> = {
  filter: QueryFilter<TDocument>;
  update: UpdateQuery<TDocument>;
  populate?: any;
  select?: string;
  options?: QueryOptions<TDocument>;
};
export abstract class AbstractRepository<TDocument> {
  protected constructor(private readonly model: Model<TDocument>) {}

  async findAll({
    filter = {},
    populate,
    select,
    paginate,
    sort,
  }: findersArg<TDocument>): Promise<TDocument[] | any> {
    let query = this.model.find(filter);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    if (sort) query = query.sort(sort);
    // 2. منطق تقسيم الصفحات (Pagination)
    const page = paginate?.page ? paginate.page : 1;
    const limit = paginate?.limit ? paginate.limit : 10;
    const skip = (page - 1) * limit;

    // حساب العدد الإجمالي للعناصر بناءً على الاستعلام الحالي
    const totalSize = await query.model.countDocuments(query.getQuery() as any);

    // جلب بيانات الصفحة المحددة فقط
    const data = await query.skip(skip).limit(limit).exec();

    return {
      totalSize,
      totalPages: Math.ceil(totalSize / limit),
      pageSize: data.length,
      pageNumber: page,
      data,
    };
  }

  async findOne({
    filter = {},
    populate,
    select,
  }: finderOneArg<TDocument>): Promise<TDocument | null> {
    let query = this.model.findOne(filter);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    return query.exec();
  }

  async create(document: Partial<TDocument>): Promise<TDocument> {
    const doc = await this.model.create({ ...document });
    return doc;
  }

  async update({
    filter,
    update,
    populate,
    select,
  }: updateArgs<TDocument>): Promise<TDocument | null> {
    let query = this.model.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
    });
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    return query.exec();
  }

  async delete(filter: QueryFilter<TDocument>): Promise<TDocument | null> {
    let query = this.model.findOneAndDelete(filter);
    return query.exec();
  }

  // داخل AbstractRepository
  async findOneAndUpdate(
    filter: QueryFilter<TDocument>,
    update: UpdateQuery<TDocument>,
    options: QueryOptions<TDocument> = {
      returnDocument: 'after',
      upsert: true,
    },
  ): Promise<TDocument | null> {
    return await this.model.findOneAndUpdate(filter, update, options);
  }
}

```

---

## src\DB\repositories\cart.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { CartDocument, CartModelName } from '../models/cart.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CartRepository extends AbstractRepository<CartDocument> {
  constructor(@InjectModel(CartModelName) Cart: Model<CartDocument>) {
    super(Cart);
  }
}

```

---

## src\DB\repositories\category.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { CategoryDocument, CategoryModelName } from '../models/category.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryRepository extends AbstractRepository<CategoryDocument> {
  constructor(
    @InjectModel(CategoryModelName) Category: Model<CategoryDocument>,
  ) {
    super(Category);
  }
}

```

---

## src\DB\repositories\coupon.repository.ts

```typescript
import { CouponModelName } from './../models/coupon.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// استيراد الـ AbstractRepository من مساره في مشروعك (تأكد من المسار الصحيح)
import { AbstractRepository } from './abstract.repository';
// استيراد الموديل والـ Document الخاص بالكوبون
import { CouponDocument } from '../models/coupon.model';

@Injectable()
export class CouponRepository extends AbstractRepository<CouponDocument> {
  // نقوم بحقن موديل الكوبون وتمريره للـ super لكي يفهم الأب (Abstract) مع أي جدول سيتعامل
  constructor(@InjectModel(CouponModelName) Coupon: Model<CouponDocument>) {
    super(Coupon);
  }
}

```

---

## src\DB\repositories\order.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { OrderDocument, OrderModelName } from '../models/order.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderRepository extends AbstractRepository<OrderDocument> {
  constructor(@InjectModel(OrderModelName) Order: Model<OrderDocument>) {
    super(Order);
  }
}

```

---

## src\DB\repositories\otp.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { OTPDocument, OTPModelName } from './../models/otp.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OTPRepository extends AbstractRepository<OTPDocument> {
  constructor(@InjectModel(OTPModelName) OTP: Model<OTPDocument>) {
    super(OTP);
  }

  // another methods for OTP as data access layer too
}

```

---

## src\DB\repositories\product.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { ProductDocument, ProductModelName } from '../models/product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductRepository extends AbstractRepository<ProductDocument> {
  constructor(@InjectModel(ProductModelName) Product: Model<ProductDocument>) {
    super(Product);
  }
}

```

---

## src\DB\repositories\review.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from './abstract.repository'; // تأكد من مسار الملف لديك
import { Review, ReviewDocument } from '../models/review.model';

@Injectable()
export class ReviewRepository extends AbstractRepository<ReviewDocument> {
  constructor(@InjectModel(Review.name) reviewModel: Model<ReviewDocument>) {
    // تمرير الموديل للأب (AbstractRepository)
    super(reviewModel);
  }
}

```

---

## src\DB\repositories\sub-category.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import {
  SubCategoryDocument,
  SubCategoryModelName,
} from '../models/sub-category.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubCategoryRepository extends AbstractRepository<SubCategoryDocument> {
  constructor(
    @InjectModel(SubCategoryModelName) SubCategory: Model<SubCategoryDocument>,
  ) {
    super(SubCategory);
  }
}

```

---

## src\DB\repositories\token.repository.ts

```typescript
import { TokenModelName, TokenDocument } from './../models/token.model';
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TokenRepository extends AbstractRepository<TokenDocument> {
  constructor(@InjectModel(TokenModelName) Token: Model<TokenDocument>) {
    super(Token);
  }
}

```

---

## src\DB\repositories\user.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { UserDocument, UserModelName } from '../models/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument> {
  constructor(@InjectModel(UserModelName) User: Model<UserDocument>) {
    super(User);
  }

  // another methods for user as data access layer too
}

```

---

## src\DB\repositories\wishlist.repository.ts

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from './abstract.repository';
import { Wishlist, WishlistDocument } from '../models/wishlist.model';

@Injectable()
export class WishlistRepository extends AbstractRepository<WishlistDocument> {
  constructor(
    @InjectModel(Wishlist.name) wishlistModel: Model<WishlistDocument>,
  ) {
    super(wishlistModel);
  }
}

```

---

## src\app.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

```

---

## src\app.controller.ts

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

```

---

## src\app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { SubCategoryModule } from './modules/sub-category/sub-category.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { CacheableMemory, createKeyv, Keyv } from 'cacheable';
import { CacheModule } from '@nestjs/cache-manager';
import { CouponModule } from './modules/coupon/coupon.module';
import { ReviewModule } from './modules/review/review.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { WishlistModule } from './modules/wishlist/wishlist.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transport: {
            host: configService.get('HOST'),
            auth: {
              user: configService.get('EMAIL'),
              pass: configService.get('PASS'),
            },
          },
          from: configService.get('EMAIL'),
        };
      },
    }),

    CacheModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          stores: [
            new Keyv({
              store: new CacheableMemory(),
            }),
            createKeyv(configService.get('REDIS_LOCAL')),
            // createKeyv(configService.get('REDIS_CLOUD')),
          ],
        };
      },
      inject: [ConfigService],
      isGlobal: true,
    }),

    UserModule,
    CategoryModule,
    ProductModule,
    SubCategoryModule,
    CartModule,
    OrderModule,
    CouponModule,
    ReviewModule,
    AnalyticsModule,
    WishlistModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

---

## src\app.service.ts

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

```

---

## src\common\constants.ts

```typescript
export const CLOUDINARY = 'cloudinary';
export const STRIPE_CLIENT = 'STRIPE_CLIENT';

```

---

## src\common\decorarors\public.decorator.ts

```typescript
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

```

---

## src\common\decorarors\roles.decorator.ts

```typescript
import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/DB/enums/user.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

```

---

## src\common\decorarors\user.decorator.ts

```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const { user } = ctx.switchToHttp().getRequest();
    return data ? user?.[data] : user;
  },
);
// @User لاعطاء كل بيانات اليوزر من الريكويست حينما يطلب عن طريق

```

---

## src\common\guards\auth.guard.ts

```typescript
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { IS_PUBLIC_KEY } from '../decorarors/public.decorator';

// @UseGuards() // Authentication , authorization
// @UsePipes() // validation

// ----------------------------------------------------------------
// Middleware (NESTJS) // Logger Parsing CORS
// Interceptor

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _JwtService: JwtService,
    private readonly _ConfigService: ConfigService,
    private readonly _UserRepository: UserRepository,
    private readonly _TokenRepository: TokenRepository,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(), // Route
      context.getClass(), // class
    ]);
    if (isPublic) return true; // pass

    // logic authentication
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeaders(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = this._JwtService.verify(token, {
        secret: this._ConfigService.get('JWT_SECRET'),
      });

      const user = await this._UserRepository.findOne({
        filter: { _id: payload.id },
      });

      if (!user) throw new NotFoundException(' User not found!');

      const tokenDoc = await this._TokenRepository.findOne({
        filter: { token, isValid: true, user: user._id },
      });

      if (!tokenDoc) throw new UnauthorizedException('Invalid token!');

      request.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeaders(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

```

---

## src\common\guards\authorization.guards.ts

```typescript
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorarors/public.decorator';
import { ROLES_KEY } from '../decorarors/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      // true
      context.getHandler(), // route method
      context.getClass(), // class
    ]);

    if (isPublic) return true; // pass

    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(), // route method
      context.getClass(), // class
    ]);

    const { user } = context.switchToHttp().getRequest();

    // ["admin", "user"]
    return requiredRoles.includes(user?.role); // true false
  }
}

```

---

## src\common\interceptors\error-handle.interceptor.ts

```typescript
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          throw error;
        }
        const errRes = {
          error: error.message,
          stack: error.stack,
          statusCode: 500,
        };
        throw new InternalServerErrorException(errRes);
      }),
    );
  }
}

```

---

## src\common\security\hash.util.ts

```typescript
import * as bcrypt from 'bcrypt';
export const hash = (
  text: string,
  saltRound: number = Number(process.env.SALT_ROUND || 10),
) => {
  return bcrypt.hashSync(text, saltRound);
};

export const compareHash = (text: string, hash: string) => {
  return bcrypt.compareSync(text, hash);
};

```

---

## src\common\services\fileupload\cloudinary.provider.ts

```typescript
import { CLOUDINARY } from 'src/common/constants';
import { v2 as Cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (configService: ConfigService) => {
    Cloudinary.config({
      cloud_name: configService.get('CLOUD_NAME'),
      api_key: configService.get('API_KEY'),
      api_secret: configService.get('API_SECRET'),
    });
    return Cloudinary;
  },
  inject: [ConfigService],
};

```

---

## src\common\services\fileupload\fileupload.module.ts

```typescript
import { Module } from '@nestjs/common';
import { FileUploadService } from './fileupload.service';
import { CloudinaryProvider } from './cloudinary.provider';

@Module({
  providers: [FileUploadService, CloudinaryProvider],
  exports: [FileUploadService, CloudinaryProvider],
})
export class FileUploadModule {}

```

---

## src\common\services\fileupload\fileupload.service.ts

```typescript
import { Inject, Injectable } from '@nestjs/common';
import { CLOUDINARY } from 'src/common/constants';
import {
  v2 as Cloudinary,
  UploadApiOptions,
  UploadApiResponse,
} from 'cloudinary';
import { Image } from 'src/common/types/image.type';

@Injectable()
export class FileUploadService {
  constructor(@Inject(CLOUDINARY) private cloudinary: typeof Cloudinary) {}

  // دالة لرفع ملف واحد إلى Cloudinary باستخدام الـ Stream
  async uploadCloud(
    buffer: Buffer,
    options: UploadApiOptions,
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      this.cloudinary.uploader
        .upload_stream(options, (error, result) => {
          if (error) return reject(error);
          return resolve(result!);
        })
        .end(buffer);
    });
  }

  // دالة لمعالجة ورفع مصفوفة من الملفات
  async saveFileToCloud(
    files: Express.Multer.File[],
    options: UploadApiOptions,
  ) {
    let savedFiles: Image[] = [];

    for (const file of files) {
      let buffer = file.buffer;
      const { secure_url, public_id } = await this.uploadCloud(buffer, options);
      savedFiles.push({ secure_url, public_id });
    }

    return savedFiles;
  }

  // حذف مجموعة من الملفات باستخدام publicIds
  async deleteFiles(publicIds: string[]) {
    await this.cloudinary.api.delete_resources(publicIds);
  }

  // حذف مجلد بالكامل (بما يحتويه من ملفات ومجلدات فرعية)
  async deleteFolder(folderPath: string) {
    // 1. حذف جميع الملفات الموجودة داخل المجلد أولاً
    await this.cloudinary.api.delete_resources_by_prefix(folderPath);

    // 2. جلب قائمة بالمجلدات الفرعية (Sub-folders)
    const subFolders = await this.cloudinary.api.sub_folders(folderPath);

    // 3. إذا وجدت مجلدات فرعية، قم بحذفها بشكل تكراري (Recursive)
    if (subFolders.folders.length) {
      for (const subfolder of subFolders.folders) {
        await this.deleteFolder(subfolder.path);
      }
    }

    // 4. بعد التأكد من أن المجلد أصبح فارغاً تماماً، قم بحذفه
    await this.cloudinary.api.delete_folder(folderPath);
  }
}

```

---

## src\common\services\payment\payment.module.ts

```typescript
import { Module } from '@nestjs/common';
import { StripeProvider } from './payment.provider';
import { PaymentService } from './payment.service';

@Module({
  providers: [PaymentService, StripeProvider],
  exports: [PaymentService],
})
export class PaymentModule {}

```

---

## src\common\services\payment\payment.provider.ts

```typescript
import { ConfigService } from '@nestjs/config';
import { STRIPE_CLIENT } from 'src/common/constants';
import Stripe from 'stripe';

export const StripeProvider = {
  provide: STRIPE_CLIENT,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return new Stripe(configService.get<string>('STRIPE_SECRET_KEY')!, {});
  },
};

```

---

## src\common\services\payment\payment.service.ts

```typescript
import { Injectable, Inject } from '@nestjs/common';
import Stripe from 'stripe';

import { STRIPE_CLIENT } from 'src/common/constants';

@Injectable()
export class PaymentService {
  constructor(@Inject(STRIPE_CLIENT) private readonly stripe: Stripe) {}

  // checkoutsession
  async createCheckoutSession({
    line_items,
    metadata,
    discounts,
    customer_email,
  }: Stripe.Checkout.SessionCreateParams) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', // once
      line_items, // array of products
      customer_email,
      discounts,
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      metadata,
    });

    return session; // url
  }
  // create coupon
  async createCoupon({ currency, percent_off }: Stripe.CouponCreateParams) {
    return this.stripe.coupons.create({ currency, percent_off });
  }

  // refund
  async refund(payment_intent: string) {
    return this.stripe.refunds.create({ payment_intent });
  }
}

```

---

## src\common\types\image.type.ts

```typescript
export type Image = { secure_url: string; public_id: string };

```

---

## src\main.ts

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import cors from 'cors';
import { ErrorHandlingInterceptor } from './common/interceptors/error-handle.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('query parser', 'extended');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.useGlobalInterceptors(new ErrorHandlingInterceptor());

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT', 5000);

  await app.listen(port);
  console.log('Ecommerce listining on port: ', port);
}
bootstrap();

```

---

## src\modules\analytics\analytics.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';

describe('AnalyticsController', () => {
  let controller: AnalyticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyticsController],
      providers: [AnalyticsService],
    }).compile();

    controller = module.get<AnalyticsController>(AnalyticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\analytics\analytics.controller.ts

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard'; // (إذا لم يكن Global)
import { RolesGuard } from 'src/common/guards/authorization.guards';
import { Role } from 'src/DB/enums/user.enum';

@Controller('admin/analytics') // مسار مخصص للأدمن
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  // بما أنك تستخدم Global Guard، فلن تحتاج لـ @UseGuards(AuthGuard)
  // نحتاج فقط لتحديد أن هذا المسار للأدمن حصراً
  @Get('dashboard')
  @Roles(Role.admin) // 👈 هذا الديكوريتور يمنع أي يوزر عادي من الدخول
  async getDashboardStats() {
    return await this.analyticsService.getAdminDashboardStats();
  }
}

```

---

## src\modules\analytics\analytics.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/DB/models/order.model';
import { Coupon, CouponSchema } from 'src/DB/models/coupon.model';
import { User, UserSchema } from 'src/DB/models/user.model';

@Module({
  imports: [
    // حقن الموديلات لكي نستخدمها في الـ Aggregation
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: Coupon.name, schema: CouponSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}

```

---

## src\modules\analytics\analytics.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyticsService],
    }).compile();

    service = module.get<AnalyticsService>(AnalyticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\analytics\analytics.service.ts

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/DB/models/order.model';
import { Coupon, CouponDocument } from 'src/DB/models/coupon.model';
import { User, UserDocument } from 'src/DB/models/user.model';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    @InjectModel(Coupon.name)
    private readonly couponModel: Model<CouponDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async getAdminDashboardStats() {
    // 1. إحصائيات الأرباح (إجمالي المبيعات للطلبات المدفوعة فقط)
    // ملاحظة: تأكد أن اسم حقل السعر النهائي في الأوردر لديك هو finalPrice أو totalPrice
    const revenueStats = await this.orderModel.aggregate([
      { $match: { paid: true } }, // نجمع أرباح الطلبات الناجحة فقط
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$finalPrice' }, // مجموع الأرباح
          totalOrders: { $sum: 1 }, // عدد الطلبات المدفوعة
        },
      },
    ]);

    // 2. الكوبونات الأكثر استخداماً (أفضل 5 كوبونات)
    const topCoupons = await this.couponModel
      .find({ usedBy: { $exists: true, $not: { $size: 0 } } }) // نجلب الكوبونات التي تم استخدامها
      // أو إذا كان لديك حقل جاهز للعداد مثل usageCount استخدمه للترتيب:
      // .sort({ usageCount: -1 })
      .select('name code discount amount usedBy') // نجلب الحقول المهمة فقط
      .limit(5)
      .lean();

    // 3. تحليل حالات الطلبات (كم طلب قيد التنفيذ، كم طلب تم توصيله؟)
    const ordersBreakdown = await this.orderModel.aggregate([
      {
        $group: {
          _id: '$orderStatus', // تجميع بناءً على حالة الطلب
          count: { $sum: 1 },
        },
      },
    ]);

    // 4. إجمالي عدد العملاء المسجلين
    const totalUsers = await this.userModel.countDocuments({ role: 'User' }); // افترض أن الرول اسمها User

    // تجميع البيانات وإرسالها للـ Frontend
    return {
      overview: {
        totalRevenue: revenueStats[0]?.totalRevenue || 0,
        totalPaidOrders: revenueStats[0]?.totalOrders || 0,
        totalUsers,
      },
      ordersBreakdown,
      topCoupons,
    };
  }
}

```

---

## src\modules\analytics\dto\create-analytics.dto.ts

```typescript
export class CreateAnalyticsDto {}

```

---

## src\modules\analytics\dto\update-analytics.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalyticsDto } from './create-analytics.dto';

export class UpdateAnalyticsDto extends PartialType(CreateAnalyticsDto) {}

```

---

## src\modules\analytics\entities\analytics.entity.ts

```typescript
export class Analytics {}

```

---

## src\modules\auth\auth.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\auth\auth.controller.ts

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { SendOtpDto } from './dto/send-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { Public } from 'src/common/decorarors/public.decorator';
@Controller('auth')
@Public()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('/send-otp')
  sendOtp(@Body() data: SendOtpDto) {
    return this.authService.sendOtp(data);
  }

  @Post('/forget-password')
  forgetPassword(@Body() data: SendOtpDto) {
    return this.authService.forgetPassword(data);
  }

  @Post('/reset-password')
  resetPassword(@Body() data: ResetPasswordDto) {
    return this.authService.resetPassword(data);
  }

  //   // @Get('google'): مسار GET يفتح نافذة تسجيل الدخول الخاصة بجوجل
  //   @Get('google')
  //   // @UseGuards(AuthGuard('google')): هذا الديكوريتور السحري يخبر NestJS بتشغيل ملف google.strategy.ts الذي كتبته
  //   // بمجرد أن يزور المستخدم رابط /auth/google، السيرفر لن يكمل تنفيذ هذه الدالة، بل سيحوله فوراً لصفحة جوجل!
  //   @UseGuards(AuthGuard('google'))
  //   async googleAuth(@Req() req) {
  //     // هذه الدالة تُترك فارغة لأن الـ Guard سيقوم بكل العمل (عمل Redirect إلى جوجل)
  //   }

  //   // @Get('google/callback'): هذا هو المسار الذي سيعود إليه المستخدم بعد أن يضغط "موافق" في صفحة جوجل
  //   @Get('google/callback')
  //   // نستخدم Guard جوجل مرة أخرى، ولكن هذه المرة ليقوم باستلام بيانات المستخدم من جوجل وتمريرها في المتغير req.user
  //   @UseGuards(AuthGuard('google'))
  //   // @Req() req: لاستخراج الطلب المحمل ببيانات المستخدم
  //   // @Res() res: لاستخراج كائن الاستجابة (Response) لأننا سنحتاج لعمل إعادة توجيه (Redirect) للفرونت اند
  //   async googleAuthRedirect(@Req() req, @Res() res) {

  //     // استدعاء دالة googleLogin التي كتبناها في الـ Service وتمرير الطلب لها
  //     const result = await this.authService.googleLogin(req);

  //     // نقطة معمارية هامة (Mentor Note):
  //     // الدخول عبر جوجل يتم من خلال متصفح (Browser Navigation) وليس طلب AJAX/Axios عادي.
  //     // لذلك لا يمكننا إرجاع { success: true } كـ JSON لأن المستخدم سيرى شاشة بيضاء بها نص JSON.
  //     // الحل الصحيح هو تحويله (Redirect) إلى موقع الفرونت اند الخاص بنا (مثلاً React أو Angular)
  //     // وتمرير التوكنز في الرابط (URL Parameters) لكي يقوم الفرونت اند بقراءتها وحفظها في الـ LocalStorage.

  //     const frontendUrl = 'http://localhost:4000/login/success'; // ضع هنا رابط الفرونت اند الحقيقي الخاص بك
  //     return res.redirect(`${frontendUrl}?access_token=${result.data.access_token}&refresh_token=${result.data.refresh_token}`);
  //   }
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}

```

---

## src\modules\auth\auth.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { OTPRepository } from 'src/DB/repositories/otp.repository';
import { OTPModel } from 'src/DB/models/otp.model';
import { TokenModel } from 'src/DB/models/token.model';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/authorization.guards';
import { CartModule } from '../cart/cart.module';
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtService,
    OTPRepository,
    TokenRepository, // GoogleStrategy
    {
      provide: APP_GUARD, // global guard
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD, // global guard
      useClass: RolesGuard,
    },
  ],
  imports: [UserModule, OTPModel, TokenModel, CartModule],
  exports: [AuthService, JwtService, TokenRepository, UserModule],
})
export class AuthModule {}

```

---

## src\modules\auth\auth.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\auth\auth.service.ts

```typescript
import { UserService } from './../user/user.service';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { OTPRepository } from 'src/DB/repositories/otp.repository';
import { SendOtpDto } from './dto/send-otp.dto';
import * as randomstring from 'randomstring';
import { compareHash } from 'src/common/security/hash.util';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CartRepository } from 'src/DB/repositories/cart.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly _UserService: UserService,
    private readonly _MailerService: MailerService,
    private readonly _ConfigService: ConfigService,
    private readonly _JwtService: JwtService,
    private readonly _OTPRepository: OTPRepository,
    private readonly _TokenRepository: TokenRepository,
    private readonly _CartRepository: CartRepository,
  ) {}
  async register(data: CreateUserDto) {
    // try {
    const { email, otp } = data;
    const otpDoc = await this._OTPRepository.findOne({ filter: { email } });
    if (!otpDoc || !compareHash(otp, otpDoc.otp))
      throw new NotFoundException('Invalid OTP!');
    await otpDoc.deleteOne();
    const user = await this._UserService.create({
      ...data,
      accountAcctivated: true,
    });
    console.log({ user });
    // create cart for the user
    await this._CartRepository.create({ user: user._id });
    return { success: true, message: 'Done' };
    // } catch (error) {
    //   throw new InternalServerErrorException(error);
    // }  == ErrorHandlingInterceptor
  }

  async login(data: LoginDto) {
    const user = await this._UserService.validateUser(data);
    const access_token = this._JwtService.sign(
      { id: user._id },
      {
        secret: this._ConfigService.get('JWT_SECRET'),
        expiresIn: this._ConfigService.get('ACCESS_TOKEN_EXPIRE'),
      },
    );

    await this._TokenRepository.create({ token: access_token, user: user._id });

    const refresh_token = this._JwtService.sign(
      { id: user._id },
      {
        secret: this._ConfigService.get('JWT_SECRET'),
        expiresIn: this._ConfigService.get('REFRESH_TOKEN_EXPIRE'),
      },
    );
    await this._TokenRepository.create({
      token: refresh_token,
      user: user._id,
    });

    return { success: true, data: { access_token, refresh_token } };
  }

  async sendOtp(data: SendOtpDto) {
    try {
      const { email } = data;
      const user = await this._UserService.userExistByEmail(email);
      if (user) throw new BadRequestException('Email Already Registrated !');
      const otp = await this._OTPRepository.findOne({ filter: { email } });
      if (otp) await otp.deleteOne();
      const newOtp = randomstring.generate(6);
      //send Email
      await this._MailerService.sendMail({
        to: email,
        subject: 'Account Acctivation',
        text: `Your OTP: ${newOtp}`,
      });
      //save to DB
      await this._OTPRepository.create({ email, otp: newOtp });
      return { success: true, message: 'Check Email!' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async forgetPassword(data: SendOtpDto) {
    try {
      const { email } = data;
      const user = await this._UserService.userExistByEmail(email);
      if (!user) {
        throw new BadRequestException(
          'this Email is not attached to any account',
        );
      }
      if (!user.accountAcctivated) {
        throw new BadRequestException('Account not acctivated yet!');
      }
      const otp = await this._OTPRepository.findOne({ filter: { email } });
      if (otp) await otp.deleteOne();
      const newOtp = randomstring.generate(7);
      this._MailerService.sendMail({
        to: email,
        subject: 'Reset Password',
        text: `Your OTP: ${newOtp}`,
      });
      await this._OTPRepository.create({ email, otp: newOtp });
      return { success: true, message: 'Check Email!' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async resetPassword(data: ResetPasswordDto) {
    try {
      const { email, password, otp } = data;
      const user = await this._UserService.userExistByEmail(email);
      if (!user) {
        throw new BadRequestException(
          'this Email is not attached to any account',
        );
      }
      if (!user.accountAcctivated) {
        throw new BadRequestException('Account not acctivated yet!');
      }
      const otpDoc = await this._OTPRepository.findOne({ filter: { email } });
      if (!otpDoc || !compareHash(otp, otpDoc.otp))
        throw new BadRequestException('Invalid OTP!');
      user.password = password;
      await user.save();
      // token model
      const tokens = await this._TokenRepository.findAll({
        //data=[]
        filter: { user: user._id },
      });

      if (tokens.data.length) {
        for (const token of tokens.data) {
          token.isValid = false;
          await token.save();
        }
      }
      return { success: true, message: 'try to login now' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  // // يجب أن تضيف هذا الكود داخل كلاس AuthService الخاص بك

  //   // async: دالة غير متزامنة
  //   // googleLogin: اسم الدالة
  //   // (req: any): تستقبل الطلب (Request) الذي سيحتوي على بيانات المستخدم القادمة من جوجل
  //   async googleLogin(req: any) {
  //     // if (!req.user): إذا لم يكن هناك بيانات مستخدم (مثلاً المستخدم ألغى عملية الدخول من صفحة جوجل)
  //     if (!req.user) {
  //       // نرمي خطأ 400 (طلب غير صالح)
  //       throw new BadRequestException('No user from google');
  //     }

  //     // استخراج الإيميل، الاسم الأول، والاسم الأخير من الكائن الذي أرجعته GoogleStrategy
  //     const { email, firstName, lastName } = req.user;

  //     // البحث في قاعدة البيانات: هل هذا الإيميل موجود لدينا مسبقاً؟
  //     let user = await this._UserService.userExistByEmail(email);

  //     // إذا لم يكن المستخدم موجوداً (هذه أول مرة يدخل فيها لموقعنا باستخدام جوجل)
  //     if (!user) {
  //       // نقوم بإنشاء حساب جديد له فوراً في قاعدة البيانات
  //       user = await this._UserService.create({
  //         email, // نمرر إيميل جوجل
  //         firstName, // الاسم الأول من جوجل
  //         lastName, // الاسم الأخير من جوجل
  //         // نولد كلمة مرور عشوائية معقدة (لأن الدخول سيتم دائماً عبر جوجل ولن يحتاج لكتابة كلمة مرور)
  //         password: randomstring.generate(20),
  //         // نُفعل الحساب فوراً لأن جوجل قد تأكد من صحة الإيميل بالفعل، فلا حاجة لإرسال OTP
  //         accountActivated: true,
  //       });
  //     }

  //     // الآن (سواء كان المستخدم قديماً أو أنشأناه للتو)، نقوم بتوليد التوكنز له
  //     // توليد الـ Access Token قصير الأمد
  //     const access_token = this._JwtService.sign(
  //       { id: user._id },
  //       {
  //         secret: this._ConfigService.get('JWT_SECRET'),
  //         expiresIn: this._ConfigService.get('ACCESS_TOKEN_EXPIRE'),
  //       },
  //     );

  //     // توليد الـ Refresh Token طويل الأمد
  //     const refresh_token = this._JwtService.sign(
  //       { id: user._id },
  //       {
  //         secret: this._ConfigService.get('JWT_SECRET'),
  //         expiresIn: this._ConfigService.get('REFRESH_TOKEN_EXPIRE'),
  //       },
  //     );

  //     // حفظ التوكنز في قاعدة البيانات (كما فعلنا في دالة الـ login العادية لضمان الأمان وإمكانية تسجيل الخروج)
  //     // ملاحظة: تأكد من حقن _TokenRepository في الـ constructor إذا لم يكن موجوداً
  //     await this._TokenRepository.create({ token: access_token, user: user._id });
  //     await this._TokenRepository.create({ token: refresh_token, user: user._id });

  //     // إرجاع التوكنز بنجاح
  //     return { success: true, data: { access_token, refresh_token } };
  //   }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

```

---

## src\modules\auth\dto\create-auth.dto.ts

```typescript
export class CreateAuthDto {}

```

---

## src\modules\auth\dto\login.dto.ts

```typescript
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

```

---

## src\modules\auth\dto\reset-password.dto.ts

```typescript
import { IsEmail, IsIn, IsString, ValidateIf } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  otp: string;

  @IsString()
  password: string;

  @IsString()
  @IsIn([Math.random], { message: 'passwords must match!' })
  @ValidateIf((obj) => obj.password !== obj.confirmPassword)
  confirmPassword: string;
}
//postman دي الحجات اللي بتتكتب لما اتيست الايند بوينت في الـ

```

---

## src\modules\auth\dto\send-otp.dto.ts

```typescript
import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';
export class SendOtpDto {
  @IsEmail()
  @IsString()
  email: string;
}

```

---

## src\modules\auth\dto\update-auth.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}

```

---

## src\modules\auth\entities\auth.entity.ts

```typescript
export class Auth {}

```

---

## src\modules\auth\strategies\google.strategy.ts

```typescript
// // استيراد Injectable لحقن هذا الكلاس في الـ Module
// import { Injectable } from '@nestjs/common';
// // استيراد PassportStrategy وهو كلاس أساسي من NestJS للتعامل مع استراتيجيات المصادقة
// import { PassportStrategy } from '@nestjs/passport';
// // استيراد Strategy (استراتيجية جوجل) و VerifyCallback (دالة التأكيد) من مكتبة جوجل
// import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// // استيراد ConfigService لقراءة مفاتيح جوجل من ملف .env
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// // كلاس GoogleStrategy يرث من PassportStrategy ونحدد له أننا سنستخدم استراتيجية (Strategy) ونسميها 'google'
// export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

//   // الدالة البناءة لحقن ConfigService
//   constructor(private configService: ConfigService) {
//     // super: استدعاء الدالة البناءة للكلاس الأب (PassportStrategy) وتمرير إعدادات جوجل إليها
//     super({
//       // clientID: رقم الهوية الخاص بتطبيقك (نحصل عليه من Google Cloud Console)
//       clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
//       // clientSecret: الرقم السري الخاص بتطبيقك (من Google أيضاً)
//       clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
//       // callbackURL: المسار الذي سيقوم جوجل بإرجاع المستخدم إليه بعد الموافقة
//       callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
//       // scope: الصلاحيات التي نطلبها من جوجل (نريد الإيميل والمعلومات الشخصية)
//       scope: ['email', 'profile'],
//     });
//   }

//   // validate: دالة تُنفذ تلقائياً بمجرد أن يعيد جوجل المستخدم إلينا بنجاح
//   // accessToken: توكن من جوجل (لا يهمنا كثيراً هنا)
//   // refreshToken: توكن لتجديد بيانات جوجل (لا يهمنا هنا)
//   // profile: الكنز! هذا المتغير يحتوي على بيانات المستخدم القادمة من جوجل (اسمه، صورته، إيميله)
//   // done: دالة نستدعيها لنخبر Passport أننا انتهينا
//   async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {

//     // استخراج الاسم والإيميلات والصورة من البروفايل القادم من جوجل
//     const { name, emails, photos } = profile;

//     // بناء كائن (Object) نظيف يحتوي على البيانات التي تهمنا فقط
//     const user = {
//       email: emails[0].value, // نأخذ الإيميل الأساسي
//       firstName: name.givenName, // الاسم الأول
//       lastName: name.familyName, // الاسم الأخير
//       picture: photos[0].value, // رابط الصورة الشخصية
//       // ملاحظة: لا يوجد Password هنا لأن الدخول تم عبر جوجل
//     };

//     // استدعاء دالة done، المعامل الأول للخطأ (null لأنه لا يوجد خطأ)، والثاني هو بيانات المستخدم
//     // بمجرد تنفيذ هذا السطر، سيتم إرسال هذا الـ user إلى الـ Controller
//     done(null, user);
//   }
// }

```

---

## src\modules\cart\cart.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\cart\cart.controller.ts

```typescript
import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto/create-cart.dto';
import { Types } from 'mongoose';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { User } from 'src/common/decorarors/user.decorator';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Roles(Role.user)
  @Post()
  async addToCart(@Body() data: CartDto, @User('_id') userId: Types.ObjectId) {
    return this.cartService.addToCart(data, userId);
  }

  @Roles(Role.user)
  @Patch()
  async updateCart(@Body() data: CartDto, @User('_id') userId: Types.ObjectId) {
    return this.cartService.updateCart(data, userId);
  }

  @Roles(Role.user)
  @Patch('/clear')
  async clearCart(@User('_id') userId: Types.ObjectId) {
    return this.cartService.clearCart(userId);
  }

  @Roles(Role.user)
  @Get()
  async getCart(@User('_id') userId: Types.ObjectId) {
    return this.cartService.getCart(userId);
  }

  @Roles(Role.user)
  @Post('coupon/apply')
  async applyCouponToCart(
    @Body('code') code: string,
    @User('_id') userId: Types.ObjectId,
  ) {
    // هذا هو المسار الفعلي الذي يربط الكوبون بعربة المستخدم ويخصم السعر
    return this.cartService.applyCoupon(userId, code);
  }

  @Roles(Role.user)
  @Delete('coupon/remove')
  async removeCouponFromCart(@User('_id') userId: Types.ObjectId) {
    // إزالة الكوبون من العربة وإعادة حساب السعر الأصلي
    return this.cartService.removeCoupon(userId);
  }
}

```

---

## src\modules\cart\cart.module.ts

```typescript
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartRepository } from 'src/DB/repositories/cart.repository';
import { ProductModule } from '../product/product.module';
import { CartModel } from 'src/DB/models/cart.model';
import { CouponModule } from '../coupon/coupon.module';

@Module({
  controllers: [CartController],
  providers: [CartService, CartRepository],
  imports: [CartModel, ProductModule, CouponModule],
  exports: [CartRepository, CartService],
})
export class CartModule {}

```

---

## src\modules\cart\cart.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartService],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\cart\cart.service.ts

```typescript
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CartDto } from './dto/create-cart.dto';
import { Types } from 'mongoose';
import { CartRepository } from 'src/DB/repositories/cart.repository';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { ProductService } from '../product/product.service';
import { CouponService } from '../coupon/coupon.service'; // استيراد خدمة الكوبون

@Injectable()
export class CartService {
  constructor(
    private readonly _CartRepository: CartRepository,
    private readonly _ProductRepository: ProductRepository,
    private readonly _ProductService: ProductService,
    private readonly _CouponService: CouponService, // حقن خدمة الكوبون
  ) {}

  async addToCart(data: CartDto, userId: Types.ObjectId) {
    const { productId, quantity } = data;

    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) throw new NotFoundException('Product not found!');
    if (!this._ProductService.inStock(product, quantity))
      throw new BadRequestException(
        `Sorry only ${product.stock} items are available!`,
      );

    let cart = await this._CartRepository.findOne({ filter: { user: userId } });

    if (!cart) {
      cart = await this._CartRepository.create({
        user: userId,
        products: [{ productId, quantity, price: product.finalPrice }],
      });
      return { data: cart };
    }

    const existingProduct = cart.products.find(
      (p) => p.productId.toString() === productId.toString(),
    );

    if (existingProduct) {
      const newQuantity = existingProduct.quantity + quantity;
      if (!this._ProductService.inStock(product, newQuantity))
        throw new BadRequestException(
          `Sorry only ${product.stock} items are available!`,
        );

      existingProduct.quantity = newQuantity;
      existingProduct.price = product.finalPrice;
    } else {
      cart.products.push({
        productId: new Types.ObjectId(productId),
        quantity,
        price: product.finalPrice,
      });
    }

    // 🔥 خطوة حماية هامة: إذا قام العميل بتغيير العربة، نلغي الكوبون القديم لإعادة حسابه
    cart.coupon = null;

    await cart.save(); // الـ Hook سيقوم بحساب totalPrice وتصفير discount
    return { data: cart };
  }

  async updateCart(data: CartDto, userId: Types.ObjectId) {
    const { productId, quantity } = data;

    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });
    if (!product) throw new NotFoundException('Product not found!');

    if (!this._ProductService.inStock(product, quantity))
      throw new BadRequestException(
        `Sorry only ${product.stock} items are available!`,
      );

    const cart = await this._CartRepository.findOne({
      filter: { user: userId, 'products.productId': productId },
    });

    if (!cart) throw new NotFoundException('Cart or Product not found!');

    const productInCart = cart.products.find(
      (p) => p.productId.toString() === productId.toString(),
    );

    if (productInCart) {
      productInCart.quantity = quantity;
      productInCart.price = product.finalPrice;
    }

    // 🔥 إزالة الكوبون لتجنب التلاعب بالأسعار
    cart.coupon = null;

    await cart.save();
    return { data: cart };
  }

  async removeFromCart(productId: Types.ObjectId, userId: Types.ObjectId) {
    const cart = await this._CartRepository.findOne({
      filter: { user: userId },
    });
    if (!cart) throw new NotFoundException('Cart not found!');

    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId.toString(),
    );

    // 🔥 إزالة الكوبون
    cart.coupon = null;

    await cart.save();
    return { data: cart };
  }

  async clearCart(userId: Types.ObjectId) {
    const cart = await this._CartRepository.findOne({
      filter: { user: userId },
    });
    if (!cart) throw new NotFoundException('Cart not found!');

    cart.products = [];
    cart.coupon = null; // إفراغ الكوبون أيضاً

    await cart.save();
    return { data: cart };
  }

  async getCart(userId: Types.ObjectId) {
    return this._CartRepository.findOne({ filter: { user: userId } });
  }

  // ==========================================
  // --- دوال الكوبون (Coupon Integration) ---
  // ==========================================

  async applyCoupon(userId: Types.ObjectId, couponCode: string) {
    // 1. جلب العربة
    const cart = await this._CartRepository.findOne({
      filter: { user: userId },
    });

    if (!cart || cart.products.length === 0) {
      throw new BadRequestException('Your cart is empty!');
    }

    // 2. تطبيق الكوبون من خلال خدمة الكوبونات باستخدام السعر الإجمالي للعربة
    // (يجب أن يكون totalPrice محسوباً مسبقاً بفضل الـ Hook)
    const couponResult = await this._CouponService.applyCoupon(
      couponCode,
      cart.totalPrice,
    );

    // 3. تحديث حقول العربة بالقيم الجديدة
    cart.coupon = couponResult.couponId as any;
    cart.discount = couponResult.discountAmount;
    cart.totalPriceAfterDiscount = couponResult.finalPrice;

    // 4. الحفظ
    // ملاحظة: الـ Hook الخاص بالعربة سيترك totalPriceAfterDiscount و discount
    // كما هما لأنه سيجد أن (this.coupon) غير فارغ.
    await cart.save();

    return {
      message: 'Coupon applied successfully!',
      data: cart,
    };
  }

  async removeCoupon(userId: Types.ObjectId) {
    const cart = await this._CartRepository.findOne({
      filter: { user: userId },
    });

    if (!cart) throw new NotFoundException('Cart not found!');

    // تصفير الكوبون يدوياً
    cart.coupon = null;

    // بمجرد عمل save، سيقوم الـ Hook بتصفير الخصم وجعل السعر النهائي يساوي الأصلي
    await cart.save();

    return {
      message: 'Coupon removed successfully!',
      data: cart,
    };
  }
}
// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { CartDto } from './dto/create-cart.dto';
// import { UpdateCartDto } from './dto/update-cart.dto';
// import { Types } from 'mongoose';
// import { CartRepository } from 'src/DB/repositories/cart.repository';
// import { ProductRepository } from 'src/DB/repositories/product.repository';
// import { ProductService } from '../product/product.service';

// @Injectable()
// export class CartService {
//   constructor(
//     private readonly _CartRepository: CartRepository,
//     private readonly _ProductRepository: ProductRepository,
//     private readonly _ProductService: ProductService,
//   ) {}

//   // async addToCart(data: CartDto, userId: Types.ObjectId) {
//   //   const { productId, quantity } = data;

//   //   // check product
//   //   const product = await this._ProductRepository.findOne({
//   //     filter: { _id: productId },
//   //   });

//   //   if (!product) throw new NotFoundException('Product not found!');

//   //   if (!this._ProductService.inStock(product, quantity))
//   //     throw new BadRequestException(
//   //       `Sorry only ${product.stock} items are available !`,
//   //     );

//   //   const isProductInCart = await this._CartRepository.findOne({
//   //     filter: { user: userId, 'products.productId': productId },
//   //   });

//   //   if (isProductInCart) {
//   //     const theProduct = isProductInCart.products.find(
//   //       (prd) => prd.productId.toString() == productId.toString(),
//   //     );

//   //     // check stock
//   //     if (
//   //       this._ProductService.inStock(product, theProduct!.quantity + quantity)
//   //     ) {
//   //       theProduct!.quantity = theProduct!.quantity + quantity;
//   //       await isProductInCart.save();
//   //       return { data: isProductInCart };
//   //     } else {
//   //       throw new BadRequestException(
//   //         `Sorry only ${product.stock} items are available !`,
//   //       );
//   //     }
//   //   }

//   //   // إذا لم يكن المنتج موجوداً مسبقاً في العربة، قم بإضافته
//   //   const cart = await this._CartRepository.update({
//   //     filter: { user: userId },
//   //     update: {
//   //       $push: { products: { productId, quantity, price: product.finalPrice } },
//   //     },
//   //   });

//   //   return { data: cart };
//   // }

//   async addToCart(data: CartDto, userId: Types.ObjectId) {
//     const { productId, quantity } = data;

//     // 1. التأكد من وجود المنتج وصلاحية المخزون
//     const product = await this._ProductRepository.findOne({
//       filter: { _id: productId },
//     });

//     if (!product) throw new NotFoundException('Product not found!');

//     if (!this._ProductService.inStock(product, quantity))
//       throw new BadRequestException(
//         `Sorry only ${product.stock} items are available!`,
//       );

//     // 2. البحث عن عربة المستخدم (جلب الوثيقة بالكامل لاستخدام .save لاحقاً)
//     let cart = await this._CartRepository.findOne({ filter: { user: userId } });

//     // 3. إذا لم تكن هناك عربة، نقوم بإنشائها
//     if (!cart) {
//       cart = await this._CartRepository.create({
//         user: userId,
//         products: [{ productId, quantity, price: product.finalPrice }],
//       });
//       return { data: cart };
//     }

//     // 4. إذا كانت العربة موجودة، نتحقق هل المنتج موجود بداخلها أم لا
//     const existingProduct = cart.products.find(
//       (p) => p.productId.toString() === productId.toString(),
//     );

//     if (existingProduct) {
//       // تحديث الكمية والسعر الحالي (في حال تغير السعر في المتجر)
//       const newQuantity = existingProduct.quantity + quantity;

//       if (!this._ProductService.inStock(product, newQuantity))
//         throw new BadRequestException(
//           `Sorry only ${product.stock} items are available!`,
//         );

//       existingProduct.quantity = newQuantity;
//       existingProduct.price = product.finalPrice;
//     } else {
//       // إضافة منتج جديد للمصفوفة
//       cart.products.push({
//         productId: new Types.ObjectId(productId),
//         quantity,
//         price: product.finalPrice,
//       });
//     }

//     // 5. حفظ العربة (سيقوم الـ pre-save hook بحساب totalPrice تلقائياً)
//     await cart.save();

//     return { data: cart };
//   }

//   // async updateCart(data: CartDto, userId: Types.ObjectId) {
//   //   const { productId, quantity } = data;

//   //   // check product
//   //   const product = await this._ProductRepository.findOne({
//   //     filter: { _id: productId },
//   //   });

//   //   if (!product) throw new NotFoundException('Product not found!');

//   //   if (!this._ProductService.inStock(product, quantity))
//   //     throw new BadRequestException(
//   //       `Sorry only ${product.stock} items are available !`,
//   //     );

//   //   const cart = await this._CartRepository.update({
//   //     filter: { user: userId, 'products.productId': productId },
//   //     update: {
//   //       'products.$.quantity': quantity,
//   //       'products.$.price': product.finalPrice,
//   //     },
//   //   });

//   //   return { data: cart };
//   // }

//   async updateCart(data: CartDto, userId: Types.ObjectId) {
//     const { productId, quantity } = data;

//     // 1. التأكد من وجود المنتج والمخزون
//     const product = await this._ProductRepository.findOne({
//       filter: { _id: productId },
//     });
//     if (!product) throw new NotFoundException('Product not found!');

//     if (!this._ProductService.inStock(product, quantity))
//       throw new BadRequestException(
//         `Sorry only ${product.stock} items are available!`,
//       );

//     // 2. جلب العربة بالكامل (Document) لكي نتمكن من استخدام .save()
//     const cart = await this._CartRepository.findOne({
//       filter: { user: userId, 'products.productId': productId },
//     });

//     if (!cart) throw new NotFoundException('Cart or Product not found!');

//     // 3. تحديث العنصر المطلوب داخل المصفوفة برمجياً (JavaScript)
//     // هذا يضمن أننا نحدث العنصر الصحيح ونحذف أي تكرارات يدوياً إذا وجدت
//     const productInCart = cart.products.find(
//       (p) => p.productId.toString() === productId.toString(),
//     );

//     if (productInCart) {
//       productInCart.quantity = quantity;
//       productInCart.price = product.finalPrice;
//     }

//     // 4. الحفظ (هنا يتم استدعاء الـ Hook وحساب الـ totalPrice تلقائياً)
//     await cart.save();

//     return { data: cart };
//   }

//   async clearCart(userId: Types.ObjectId) {
//     const cart = await this._CartRepository.update({
//       filter: { user: userId },
//       update: { products: [] },
//     });

//     return { data: cart };
//   }

//   async getCart(userId: Types.ObjectId) {
//     return this._CartRepository.findOne({ filter: { user: userId } });
//   }

//   // async removeFromCart(productId: Types.ObjectId, userId: Types.ObjectId) {
//   //     const cart = await this._CartRepository.update({
//   //       filter: { user: userId },
//   //       update: {
//   //         $pull: { products: { productId: productId } },
//   //       },
//   //     });

//   //     if (!cart) throw new NotFoundException('Cart not found!');

//   //     return { data: cart };
//   //   }

//   findAll() {
//     return `This action returns all cart`;
//   }
// }

```

---

## src\modules\cart\dto\create-cart.dto.ts

```typescript
import { IsInt, IsMongoId, IsPositive, Min } from 'class-validator';
import { Types } from 'mongoose';

export class CartDto {
  @IsMongoId()
  productId!: Types.ObjectId;

  @IsInt()
  @IsPositive()
  @Min(1)
  quantity!: number;
}

```

---

## src\modules\cart\dto\update-cart.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CartDto) {}

```

---

## src\modules\cart\entities\cart.entity.ts

```typescript
export class Cart {}

```

---

## src\modules\category\category.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\category\category.controller.ts

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/common/decorarors/user.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Public } from 'src/common/decorarors/public.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Roles(Role.user, Role.admin)
  @UseInterceptors(FileInterceptor('image')) // << memory && { storage: diskStorage({}) }
  create(
    @Body() data: CreateCategoryDto,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile()
    file: Express.Multer.File,
    // @Req() req: any,
  ) {
    return this.categoryService.create(data, userId, file);
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id')
  async update(
    // @Param('id') categoryId: Types.ObjectId,  => Aya
    @Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.categoryService.update(categoryId, updateCategoryDto, userId);
  }
  //يبقى استخدم بايب @Query | @Param من id طالما الريكويست جاي فيه
  //  استخدمنا البايب في حالة الكويري والبارام علشان لو في خطأ في الآي دي يطلعوا من برة لبرة
  @Roles(Role.admin, Role.user)
  @Patch(':id/image')
  @UseInterceptors(FileInterceptor('image'))
  async updateImage(
    @Param('id') categoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.categoryService.updateImage(categoryId, file, userId);
  }

  @Roles(Role.admin, Role.user)
  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.categoryService.remove(categoryId, userId);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) categoryId: Types.ObjectId) {
    return this.categoryService.findOne(categoryId);
  }

  @Public()
  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number) {
    return this.categoryService.findAll(page);
  }
}
//   @Get()
//   findAll() {
//     return this.categoryService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.categoryService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateCategoryDto: UpdateCategoryDto,
//   ) {
//     return this.categoryService.update(+id, updateCategoryDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.categoryService.remove(+id);
//   }
// }

```

---

## src\modules\category\category.module.ts

```typescript
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryModel } from 'src/DB/models/category.model';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { CloudinaryProvider } from 'src/common/services/fileupload/cloudinary.provider';

@Module({
  imports: [CategoryModel],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    FileUploadService,
    CloudinaryProvider,
  ],
  exports: [CategoryRepository], // علشان هعوزه في حجات زي البرودكت
})
export class CategoryModule {}

```

---

## src\modules\category\category.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\category\category.service.ts

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { ConfigService } from '@nestjs/config';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Types } from 'mongoose';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { nanoid } from 'nanoid';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    private readonly _FileUploadService: FileUploadService,
    private readonly _configService: ConfigService,
    private readonly _CategoryRepository: CategoryRepository,
  ) {}
  //الخدمات والأدوات أو المعدات التي سنستخمها constructor نضع في الـ

  async create(
    data: CreateCategoryDto,
    userId: Types.ObjectId,
    file: Express.Multer.File,
    // فهي المواد الخام التي نستخدمها والتي تختلف باختلاف المطلوب وليــست هي المعدات
  ) {
    // جلب المسار الرئيسي من إعدادات النظام
    const rootfolder = this._configService.get('CLOUD_ROOT_FOLDER');

    //  إنشاء معرف فريد للمجلد الجديد(يمكنك استخدام nanoid كما ظهر في Terminal)
    const cloudFolder = nanoid();

    // رفع الصورة إلى Cloudinary في مجلد مخصص
    const results = await this._FileUploadService.saveFileToCloud([file], {
      folder: `${rootfolder}/category/${cloudFolder}`,
    });

    // حفظ بيانات الفئة في قاعدة البيانات
    const category = await this._CategoryRepository.create({
      name: data.name,
      cloudFolder,
      image: results[0],
      createdBy: userId,
    });

    return { data: category };
  }

  async update(
    categoryId: Types.ObjectId,
    updateCategoryDto: UpdateCategoryDto,
    userId: Types.ObjectId,
  ) {
    // 1. البحث عن الفئة (Category) باستخدام الـ Repository
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    //  التحقق من وجود الفئة، وإذا لم توجد يتم رمي خطأ
    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    //  DTO تحديث البيانات إذا كانت موجودة في الـ
    // image > (تمت معالجته في دالة أخرى)
    if (updateCategoryDto.name) {
      category.name = updateCategoryDto.name;
      category.updatedBy = userId; // تعيين المستخدم الذي قام بالتحديث
      await category.save(); // حفظ التغييرات في قاعدة البيانات
    }

    // 4. إرجاع النتيجة النهائية
    return { data: category };
  }

  // سيدخل النظام إلى داخل الـ if وينفذ السطر: category.name = updateCategoryDto.name;
  // بما أن الكائن فارغ، فإن updateCategoryDto.name غير موجودة، وقيمتها برمجياً هي undefined.
  // الكارثة: أنت الآن قمت بمسح اسم القسم القديم من قاعدة البيانات واستبدلته بـ undefined.
  // وإذا كان حقل الاسم إجبارياً (Required) في نموذج Mongoose الخاص بك، فسوف ينهار الطلب ويُرجع خطأ

  async updateImage(
    categoryId: Types.ObjectId,
    file: Express.Multer.File,
    userId: Types.ObjectId,
  ) {
    // 1. التأكد من وجود الفئة في قاعدة البيانات
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    // 2. تحديث الصورة على Cloudinary
    // نرسل الـ public_id القديم لكي يقوم Cloudinary باستبدال الصورة القديمة بنفس المعرف
    //:الإمساك بعنوان الصورة القديــــــــمــــــة

    const public_id = category.image.public_id;
    // عملية الرفع والاستبدال الذكية
    const results = await this._FileUploadService.saveFileToCloud([file], {
      public_id,
    });
    //public_id بدون تمرير ال file= لو رفعنا الصورة الجديدة
    //برفعها كملف جديد كلياً بمعرف جديد ورابط جديد Cloudinary سيقوم

    // 3. تحديث بيانات الفئة في قاعدة البيانات
    category.image = results[0];
    category.updatedBy = userId;
    await category.save();

    return { data: category };
  }

  async remove(categoryId: Types.ObjectId, userId: Types.ObjectId) {
    // 1. البحث عن الفئة للتأكد من وجودها
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    // 2. رمي خطأ إذا لم يتم العثور عليها
    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    // 3. حذف الفئة من قاعدة البيانات
    await category.deleteOne();

    // 4. إرجاع رسالة نجاح
    return { message: 'done' };
  }

  async findOne(categoryId: Types.ObjectId) {
    // البحث عن الفئة باستخدام الـ Repository
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    // إذا لم يتم العثور على الفئة، يتم رمي خطأ 404
    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    // إرجاع البيانات في حال وجودها
    return { data: category };
  }

  async findAll(page: number) {
    return {
      data: await this._CategoryRepository.findAll({
        populate: [{ path: 'createdBy' }],
        paginate: { page },
      }),
    };
  }
}

```

---

## src\modules\category\dto\create-category.dto.ts

```typescript
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
}

```

---

## src\modules\category\dto\update-category.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

```

---

## src\modules\category\entities\category.entity.ts

```typescript
export class Category {}

```

---

## src\modules\coupon\coupon.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';

describe('CouponController', () => {
  let controller: CouponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouponController],
      providers: [CouponService],
    }).compile();

    controller = module.get<CouponController>(CouponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\coupon\coupon.controller.ts

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Types } from 'mongoose';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { User } from 'src/common/decorarors/user.decorator';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Controller('coupons')
export class CouponController {
  constructor(private readonly _CouponService: CouponService) {}

  @Roles(Role.user, Role.admin)
  @Post('create')
  async create(
    @Body() data: CreateCouponDto,
    @User('_id') adminId: Types.ObjectId,
  ) {
    const result = await this._CouponService.createCoupon(data, adminId);

    return {
      message: 'تم إنشاء الكوبون بنجاح',
      data: result,
    };
  }
}

```

---

## src\modules\coupon\coupon.module.ts

```typescript
import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponRepository } from 'src/DB/repositories/coupon.repository';

// استيراد الموديل الجاهز الذي قمت بإنشائه في ملف schema
import { CouponModel } from 'src/DB/models/coupon.model';

@Module({
  imports: [
    // تسجيل جدول الكوبونات في قاعدة البيانات
    CouponModel,
  ],
  // (APIs) تسجيل الكونترولر ليستقبل الروابط
  controllers: [CouponController],
  // تسجيل البروفايدرز (الخدمة والمستودع)
  providers: [CouponService, CouponRepository],
  exports: [CouponService],
})
export class CouponModule {}

```

---

## src\modules\coupon\coupon.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CouponService } from './coupon.service';

describe('CouponService', () => {
  let service: CouponService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponService],
    }).compile();

    service = module.get<CouponService>(CouponService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\coupon\coupon.service.ts

```typescript
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { CouponRepository } from 'src/DB/repositories/coupon.repository';

import { CreateCouponDto } from './dto/create-coupon.dto';

@Injectable()
export class CouponService {
  constructor(private readonly _CouponRepository: CouponRepository) {}

  // دالة تطبيق الكوبون وحساب قيمة التعويض/الخصم

  async applyCoupon(code: string, originalPrice: number) {
    if (!code) {
      throw new BadRequestException('Coupon code is required!');
    }

    const cleanCode = code.trim().toUpperCase();

    const coupon = await this._CouponRepository.findOne({
      filter: { code: cleanCode },
    });

    if (!coupon) {
      throw new NotFoundException('Invalid coupon code!');
    }

    if (!coupon.isActive) {
      throw new BadRequestException('This coupon is currently disabled!');
    }

    if (new Date(coupon.expirationDate) < new Date()) {
      throw new BadRequestException('This coupon has expired!');
    }

    if (coupon.usageLimit !== null && coupon.usedCount >= coupon.usageLimit) {
      throw new BadRequestException(
        'This coupon has reached its maximum usage limit!',
      );
    }

    let discountAmount = 0;

    if (coupon.discountType === 'percentage') {
      discountAmount = originalPrice * (coupon.discount / 100);
    } else if (coupon.discountType === 'fixed') {
      discountAmount = coupon.discount;
    }

    const finalPrice = Math.max(0, originalPrice - discountAmount);

    return {
      couponId: coupon._id as Types.ObjectId,
      originalPrice,
      discountAmount,
      finalPrice,
    };
  }

  // دالة زيادة عداد الاستخدام (نستدعيها بعد نجاح عملية الدفع الفعلي)

  async incrementUsage(couponId: Types.ObjectId) {
    if (!couponId) return;

    await this._CouponRepository.update({
      filter: { _id: couponId },
      update: { $inc: { usedCount: 1 } },
    });
  }

  // دالة إنشاء الكوبون (خاصة بالأدمن)

  async createCoupon(data: CreateCouponDto, userId: Types.ObjectId) {
    const coupon = await this._CouponRepository.create({
      ...data,
      createdBy: userId,
    });

    return coupon;
  }
}

```

---

## src\modules\coupon\dto\create-coupon.dto.ts

```typescript
import {
  IsString,
  IsNumber,
  IsEnum,
  IsDate,
  IsOptional,
  IsBoolean,
  Min,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCouponDto {
  @IsString()
  @IsNotEmpty({ message: 'كود الكوبون مطلوب' })
  code!: string;

  @IsNumber()
  @Min(0, { message: 'قيمة الخصم لا يمكن أن تكون بالسالب' })
  discount!: number;

  @IsEnum(['percentage', 'fixed'], {
    message: 'نوع الخصم يجب أن يكون percentage أو fixed',
  })
  discountType!: string;

  @IsDate()
  @Type(() => Date) // تحويل النص القادم من الـ Request إلى كائن Date حقيقي
  @IsNotEmpty({ message: 'تاريخ الانتهاء مطلوب' })
  expirationDate!: Date;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'حد الاستخدام يجب أن يكون 1 على الأقل' })
  usageLimit?: number;
}

```

---

## src\modules\coupon\dto\update-coupon.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateCouponDto } from './create-coupon.dto';

export class UpdateCouponDto extends PartialType(CreateCouponDto) {}

```

---

## src\modules\coupon\entities\coupon.entity.ts

```typescript
export class Coupon {}

```

---

## src\modules\order\dto\create-order.dto.ts

```typescript
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaymentMethod } from 'src/DB/models/order.model';
export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsString()
  @IsNotEmpty()
  address!: string;

  @IsEnum(PaymentMethod)
  @IsOptional()
  paymentMethod!: PaymentMethod;
}
// DTO fields: el Goz2 elly byeigi men el user fel request mn el schema fields + validation

```

---

## src\modules\order\dto\update-order.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}

```

---

## src\modules\order\entities\order.entity.ts

```typescript
export class Order {}

```

---

## src\modules\order\order.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\order\order.controller.ts

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from 'src/common/decorarors/user.decorator';
import type { UserDocument } from 'src/DB/models/user.model';
import { Public } from 'src/common/decorarors/public.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose/dist/pipes/parse-object-id.pipe';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Roles(Role.user)
  @Post()
  async create(@Body() data: CreateOrderDto, @User() user: UserDocument) {
    return this.orderService.create(data, user);
  }

  @Post('/webhook')
  @Public()
  async stripeWebhook(@Body() data: any) {
    console.log({ dataFromStripe: data });
    this.orderService.stripeWebhook(data);
    return;
  }

  @Roles(Role.user)
  @Post('/cancel/:id')
  async cancelOrder(
    @Param('id', ParseObjectIdPipe) orderId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.orderService.cancelOrder(orderId, userId);
  }
}

```

---

## src\modules\order\order.module.ts

```typescript
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { OrderModel } from 'src/DB/models/order.model';
import { ProductModule } from '../product/product.module';
import { CartModule } from '../cart/cart.module';
import { PaymentModule } from 'src/common/services/payment/payment.module';
import { CouponModule } from '../coupon/coupon.module';

@Module({
  imports: [OrderModel, ProductModule, CartModule, PaymentModule, CouponModule],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
  exports: [OrderService, OrderRepository],
})
export class OrderModule {}

```

---

## src\modules\order\order.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\order\order.service.ts

```typescript
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UserDocument } from 'src/DB/models/user.model';
import { Types } from 'mongoose';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product/product.service';
import { CouponService } from '../coupon/coupon.service';
import { PaymentService } from 'src/common/services/payment/payment.service';
import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';

@Injectable()
export class OrderService {
  constructor(
    private readonly _OrderRepository: OrderRepository,
    private readonly _CartService: CartService,
    private readonly _ProductService: ProductService,
    private readonly _CouponService: CouponService,
    private readonly _PaymentService: PaymentService,
  ) {}

  async create(data: CreateOrderDto, user: UserDocument) {
    const userId = user._id;

    // 1. جلب العربة
    const cart = await this._CartService.getCart(userId);
    if (!cart || !cart.products.length) {
      throw new BadRequestException('Empty Cart! Please add products first.');
    }

    let originalPrice = 0;
    const products: any[] = [];

    // 2. التحقق من المخزون وتجهيز المنتجات (Snapshot)
    for (const prd of cart.products) {
      const product = await this._ProductService.checkProductExistence(
        prd.productId,
      );

      if (!this._ProductService.inStock(product, prd.quantity)) {
        throw new BadRequestException(
          `Sorry only ${product.stock} items are available for ${product.name}!`,
        );
      }

      originalPrice += product.finalPrice * prd.quantity;

      products.push({
        productId: prd.productId,
        name: product.name,
        price: product.finalPrice,
        quantity: prd.quantity,
        image: product.thumbnail?.secure_url,
      });
    }

    // 3. تجهيز بيانات الحسابات من العربة
    const discountAmount = cart.discount || 0;
    const finalPrice = cart.totalPriceAfterDiscount || originalPrice;
    const appliedCouponId = cart.coupon || null;

    let stripeCouponId: string | null = null;

    // 4. إنشاء كوبون Stripe إذا وجد خصم
    if (discountAmount > 0) {
      try {
        const stripeCoupon = await this._PaymentService.createCoupon({
          currency: 'egp',
          amount_off: Math.round(discountAmount * 100),
          name: `Discount Applied`,
        });
        stripeCouponId = stripeCoupon.id;
      } catch (error) {
        console.error('Stripe Coupon Error:', error);
      }
    }

    // 5. إنشاء الأوردر في قاعدة البيانات
    const order = await this._OrderRepository.create({
      ...data,
      user: userId,
      price: finalPrice,
      originalPrice,
      discount: discountAmount,
      coupon: appliedCouponId,
      products,
    } as any);

    // 6. التعامل مع طرق الدفع
    // أ: الدفع النقدي (Cash)
    if (data.paymentMethod === PaymentMethod.cash) {
      await Promise.all(
        products.map((item) =>
          this._ProductService.updateStock(
            item.productId as any,
            item.quantity,
            false,
          ),
        ),
      );

      if (appliedCouponId) {
        await this._CouponService.incrementUsage(appliedCouponId as any);
      }

      await this._CartService.clearCart(userId);

      return { message: 'Order placed successfully (Cash)', order };
    }

    // ب: الدفع بالبطاقة (Card)
    const session = await this.payWithCard(
      order._id,
      products,
      user.email,
      stripeCouponId,
    );

    // ملاحظة: لا نمسح العربة هنا في حالة الكريديت كارد، ننتظر الـ Webhook للتأكيد
    return {
      message: 'Checkout session initiated',
      data: session.url,
      orderId: order._id,
    };
  }

  async payWithCard(
    orderId: any,
    products: any[],
    userEmail: string,
    stripeCouponId?: string | null,
  ) {
    const line_items = products.map((product) => ({
      price_data: {
        currency: 'egp',
        product_data: {
          name: product.name,
          images: product.image ? [product.image] : [],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const discounts = stripeCouponId ? [{ coupon: stripeCouponId }] : [];

    return this._PaymentService.createCheckoutSession({
      metadata: { orderId: orderId.toString() },
      customer_email: userEmail,
      line_items,
      discounts,
    });
  }

  async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
    const order = await this._OrderRepository.findOne({
      filter: { user: userId, _id: orderId },
    });

    if (!order) throw new NotFoundException('Order not found!');

    // إذا كان الدفع كارد، نحاول عمل Refund إذا تم الدفع فعلياً
    if (order.paymentMethod === PaymentMethod.card) {
      if (order.paid && order.payment_intent) {
        await this._PaymentService.refund(order.payment_intent);
        order.orderStatus = OrderStatus.refunded;
      } else {
        // إذا لم يُدفع بعد، نكتفي بالإلغاء
        order.orderStatus = OrderStatus.canceled;
      }
    } else {
      // الدفع كاش
      order.orderStatus = OrderStatus.canceled;
    }

    await order.save();
    return { message: 'Order status updated', status: order.orderStatus };
  }
  async stripeWebhook(info: any) {
    // 1. صمام أمان: التأكد من أن info ليست undefined أو null ولديها خاصية type
    // هذا يمنع خطأ TypeError: Cannot read properties of undefined (reading 'type')
    if (!info || !info.type) {
      console.error('⚠️ [Stripe Webhook] Received invalid or empty data.');
      return;
    }

    // 2. فلترة الأحداث: نحن نهتم فقط بنجاح الجلسة (Checkout Session Completed)
    if (info.type !== 'checkout.session.completed') {
      console.log(`[Stripe Webhook] Event ignored: ${info.type}`);
      return;
    }

    // 3. استخراج البيانات باستخدام Optional Chaining لضمان عدم الانهيار في حالة نقص الحقول
    const session = info.data?.object;
    const orderId = session?.metadata?.orderId;

    // 4. فحص وجود معرف الطلب (OrderId)
    if (!orderId) {
      console.error(' [Stripe Webhook] Missing orderId in session metadata.');
      return;
    }

    try {
      // 5. تحديث حالة الأوردر وحفظ الـ payment_intent
      // نستخدم findOneAndUpdate لضمان أننا نحدث فقط الطلبات التي لم تُدفع بعد (paid: false)
      const order = await this._OrderRepository.findOneAndUpdate(
        {
          _id: new Types.ObjectId(orderId),
          paid: false, // حماية من تكرار العملية (Idempotency)
        },
        {
          paid: true,
          payment_intent: session.payment_intent,
          orderStatus: OrderStatus.placed, // تحديث الحالة إلى "تم الطلب"
        },
        { returnDocument: 'after' },
      );

      // 6. إذا تم العثور على الطلب وتحديثه بنجاح، نبدأ العمليات المعتمدة
      if (order) {
        const currentOrder = order as any;

        console.log(
          ` [Stripe Webhook] Processing final steps for Order: ${orderId}`,
        );

        // أ. تحديث المخزون (تقليل الكميات)
        if (currentOrder.products && currentOrder.products.length > 0) {
          await Promise.all(
            currentOrder.products.map((item: any) =>
              this._ProductService.updateStock(
                item.productId as any,
                item.quantity,
                false, // false تعني تقليل المخزون
              ),
            ),
          );
        }

        // ب. زيادة عداد استخدام الكوبون (بما أن الدفع اكتمل)
        if (currentOrder.coupon) {
          await this._CouponService.incrementUsage(currentOrder.coupon);
          console.log(`🎫 [Stripe Webhook] Coupon usage incremented.`);
        }

        // ج. مسح العربة (Cart) للمستخدم بعد نجاح الدفع
        await this._CartService.clearCart(currentOrder.user);

        console.log(
          ` [Stripe Webhook] Order ${orderId} finalized successfully.`,
        );
      } else {
        console.warn(
          ` [Stripe Webhook] Order ${orderId} was not found or already marked as paid.`,
        );
      }
    } catch (error) {
      // حماية السيرفر من أي أخطاء غير متوقعة أثناء التعامل مع الداتا بيز
      console.error(` [Stripe Webhook] Critical Error:`, error);
    }
  }
}

// import {
//   Injectable,
//   BadRequestException,
//   NotFoundException,
// } from '@nestjs/common';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { CartService } from '../cart/cart.service';
// import { ProductService } from '../product/product.service';
// import { UserDocument } from 'src/DB/models/user.model';
// import { OrderRepository } from 'src/DB/repositories/order.repository';
// import { PaymentService } from 'src/common/services/payment/payment.service';
// import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';
// import { Types } from 'mongoose';
// // 1. استيراد خدمة الكوبونات
// import { CouponService } from '../coupon/coupon.service';

// @Injectable()
// export class OrderService {
//   constructor(
//     private readonly _CartService: CartService,
//     private readonly _ProductService: ProductService,
//     private readonly _OrderRepository: OrderRepository,
//     private readonly _PaymentService: PaymentService,
//     private readonly _CouponService: CouponService,
//   ) {}

//   async create(
//     data: CreateOrderDto, // لم نعد بحاجة لـ couponCode في الـ Body لأنه موجود في العربة
//     user: UserDocument,
//   ) {
//     const userId = user._id;

//     // 1. جلب العربة (يجب أن تكون الـ Coupon مغطاة بـ Populate أو موجودة بالكامل)
//     const cart = await this._CartService.getCart(userId);
//     if (!cart || !cart.products.length) {
//       throw new BadRequestException('Empty Cart! Please add products first.');
//     }

//     let originalPrice = 0;
//     const products: any[] = [];

//     // 2. التحقق من المخزون وتجهيز المنتجات
//     for (const prd of cart.products) {
//       const product = await this._ProductService.checkProductExistence(
//         prd.productId,
//       );

//       if (!this._ProductService.inStock(product, prd.quantity)) {
//         throw new BadRequestException(
//           `Sorry only ${product.stock} items are available for ${product.name}!`,
//         );
//       }

//       originalPrice += product.finalPrice * prd.quantity;

//       products.push({
//         productId: prd.productId,
//         name: product.name,
//         price: product.finalPrice,
//         quantity: prd.quantity,
//         image: product.thumbnail?.secure_url,
//       });
//     }

//     // 3. تجهيز بيانات الحسابات (من العربة مباشرة)
//     // نعتمد على الحسابات التي تمت في CartService.applyCoupon
//     const discountAmount = cart.discount || 0;
//     const finalPrice = cart.totalPriceAfterDiscount || originalPrice;
//     const appliedCouponId = cart.coupon || null;

//     let stripeCouponId: string | null = null;

//     // 4. إنشاء كوبون Stripe إذا كان هناك خصم مطبق
//     if (discountAmount > 0) {
//       try {
//         const stripeCoupon = await this._PaymentService.createCoupon({
//           currency: 'egp',
//           amount_off: Math.round(discountAmount * 100), // تحويل لـ "قروش" لـ Stripe
//           name: `Discount Applied`,
//         });
//         stripeCouponId = stripeCoupon.id;
//       } catch (error) {
//         // حماية: إذا فشل إنشاء كوبون سترايب لا نعطل الأوردر بل نسجل الخطأ
//         console.error('Stripe Coupon Creation Failed:', error.message);
//       }
//     }

//     // 5. إنشاء الأوردر في قاعدة البيانات (حفظ الـ Snapshot)
//     const order = await this._OrderRepository.create({
//       ...data,
//       user: userId,
//       price: finalPrice, // المبلغ النهائي المطلوب دفعه
//       originalPrice, // المبلغ قبل الخصم للتوثيق
//       discount: discountAmount, // قيمة الخصم المطبق
//       coupon: appliedCouponId, // ربط معرف الكوبون
//       products,
//     } as any);

//     // 6. التعامل مع طرق الدفع
//     // أ: الدفع النقدي (Cash)
//     if (data.paymentMethod === PaymentMethod.cash) {
//       // تحديث المخزون فوراً
//       await Promise.all(
//         products.map((item) =>
//           this._ProductService.updateStock(
//             item.productId as any,
//             item.quantity,
//             false, // false تعني تقليل المخزون
//           ),
//         ),
//       );

//       // زيادة عدد مرات استخدام الكوبون
//       if (appliedCouponId) {
//         await this._CouponService.incrementUsage(appliedCouponId as any);
//       }

//       // مسح العربة بعد نجاح العملية
//       await this._CartService.clearCart(userId);

//       return {
//         message: 'Order placed successfully (Cash on Delivery)',
//         order,
//       };
//     }

//     // ب: الدفع بالبطاقة (Card)
//     const session = await this.payWithCard(
//       order._id,
//       products,
//       user.email,
//       stripeCouponId,
//     );

//     // ملاحظة: في حالة الـ Card، يفضل مسح العربة وتحديث المخزون داخل الـ Webhook
//     // لضمان أن الدفع قد تم فعلياً. ولكن سأترك مسح العربة هنا كما في كودك الأصلي:
//     await this._CartService.clearCart(userId);

//     return {
//       message: 'Checkout session initiated',
//       data: session.url,
//       orderId: order._id,
//     };
//   }

//   // ✅ تم إضافة (| null) هنا لكي لا يعترض محرر الأكواد عند تمرير المتغير وهو فارغ
//   async payWithCard(
//     orderId: any,
//     products: any[],
//     userEmail: string,
//     stripeCouponId?: string | null,
//   ) {
//     const line_items = products.map((product) => ({
//       price_data: {
//         currency: 'egp',
//         product_data: {
//           name: product.name,
//           images: product.image ? [product.image] : [],
//         },
//         unit_amount: Math.round(product.price * 100),
//       },
//       quantity: product.quantity,
//     }));

//     // تجهيز مصفوفة الخصومات لـ Stripe
//     const discounts = stripeCouponId ? [{ coupon: stripeCouponId }] : [];

//     return this._PaymentService.createCheckoutSession({
//       metadata: { orderId: orderId.toString() },
//       customer_email: userEmail,
//       line_items,
//       discounts, // إرسال الخصم الديناميكي بدلاً من الـ 20% الثابتة
//     });
//   }

//   async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
//     const order = await this._OrderRepository.findOne({
//       filter: { user: userId, _id: orderId },
//     });

//     if (!order) throw new NotFoundException('Order invalid!');

//     const paymentintent = order.payment_intent;
//     console.log({ paymentintent });

//     if (order.paymentMethod == PaymentMethod.card) {
//       if (order.payment_intent) {
//         await this._PaymentService.refund(order.payment_intent);
//       }
//       order.orderStatus = OrderStatus.refunded;
//     } else {
//       order.orderStatus = OrderStatus.canceled;
//     }

//     await order.save();
//     return { message: 'Done' };
//   }

//   async stripeWebhook(info: any) {
//     if (info.type !== 'checkout.session.completed') {
//       console.log(`[Stripe] Ignored event: ${info.type}`);
//       return;
//     }

//     const { orderId } = info.data.object.metadata;

//     const order = await this._OrderRepository.findOneAndUpdate(
//       {
//         _id: Types.ObjectId.createFromHexString(orderId),
//         paid: false,
//         paymentMethod: PaymentMethod.card,
//       },
//       {
//         paid: true,
//         payment_intent: info.data.object.payment_intent,
//       },
//       { returnDocument: 'after' },
//     );

//     const currentOrder = order as any;

//     if (
//       currentOrder &&
//       currentOrder.products &&
//       currentOrder.products.length > 0
//     ) {
//       await Promise.all(
//         currentOrder.products.map((item: any) =>
//           this._ProductService.updateStock(
//             item.productId as any,
//             item.quantity,
//             false,
//           ),
//         ),
//       );

//       // 🔥 زيادة عداد الكوبون هنا بعد أن نتأكد من نجاح عملية الدفع بالفيزا
//       if (currentOrder.coupon) {
//         await this._CouponService.incrementUsage(currentOrder.coupon);
//       }

//       console.log(
//         `Stock and Coupon updated successfully for Order: ${orderId}`,
//       );
//     }
//   }
// }

// // import {
// //   Injectable,
// //   BadRequestException,
// //   NotFoundException,
// // } from '@nestjs/common';
// // import { CreateOrderDto } from './dto/create-order.dto';
// // import { CartService } from '../cart/cart.service';
// // import { ProductService } from '../product/product.service';
// // import { UserDocument } from 'src/DB/models/user.model';
// // import { OrderRepository } from 'src/DB/repositories/order.repository';
// // import { PaymentService } from 'src/common/services/payment/payment.service';
// // import { OrderStatus, PaymentMethod } from 'src/DB/models/order.model';
// // import { Types } from 'mongoose';

// // @Injectable()
// // export class OrderService {
// //   constructor(
// //     private readonly _CartService: CartService,
// //     private readonly _ProductService: ProductService,
// //     private readonly _OrderRepository: OrderRepository,
// //     private readonly _PaymentService: PaymentService,
// //   ) {}

// //   // async create(data: CreateOrderDto, user: UserDocument) {
// //   //   // user id
// //   //   const userId = user._id;

// //   //   // check cart
// //   //   const cart = await this._CartService.getCart(userId);
// //   //   // console.log({ cart });

// //   //   if (!cart || !cart.products.length)
// //   //     throw new BadRequestException('Empty Cart!');

// //   //   let price = 0;
// //   //   let products: any = [];
// //   //   // check products
// //   //   for (const prd of cart.products) {
// //   //     // check product in DB
// //   //     const product = await this._ProductService.checkProductExistence(
// //   //       prd.productId,
// //   //     );

// //   //     // check stock
// //   //     if (!this._ProductService.inStock(product, prd.quantity))
// //   //       throw new BadRequestException(
// //   //         `Sorry only ${product.stock} are only avaiable!`,
// //   //       );

// //   //     await this._ProductService.updateStock(
// //   //       prd.productId as any,
// //   //       prd.quantity,
// //   //       false,
// //   //     );

// //   //     price += product.finalPrice * prd.quantity;
// //   //     products.push({
// //   //       name: product.name,
// //   //       price: product.finalPrice,
// //   //       quantity: prd.quantity,
// //   //       image: product.thumbnail?.secure_url,
// //   //     });
// //   //   }

// //   //   // create order
// //   //   const order = await this._OrderRepository.create({
// //   //     ...data,
// //   //     cart: cart._id,
// //   //     user: userId,
// //   //     price,
// //   //   });

// //   //   // payment cash >>> update stock
// //   //   // card >> payment online >>>>

// //   //   // clear cart
// //   //   await this._CartService.clearCart(userId);
// //   //   return { message: 'done', order };

// //   //   const session = await this.payWithCard(order.id, products, user.email);

// //   //   return { message: 'done', data: session.url };
// //   // }

// //   async create(data: CreateOrderDto, user: UserDocument) {
// //     const userId = user._id;

// //     // 1. جلب العربة والتأكد من وجود منتجات
// //     const cart = await this._CartService.getCart(userId);
// //     if (!cart || !cart.products.length) {
// //       throw new BadRequestException('Empty Cart!');
// //     }

// //     let price = 0;
// //     let products: any = [];

// //     // 2. التحقق من وجود المنتجات وصلاحية المخزون (Validation Only)
// //     for (const prd of cart.products) {
// //       const product = await this._ProductService.checkProductExistence(
// //         prd.productId,
// //       );

// //       if (!this._ProductService.inStock(product, prd.quantity)) {
// //         throw new BadRequestException(
// //           `Sorry only ${product.stock} items are available for ${product.name}!`,
// //         );
// //       }

// //       // حساب السعر الإجمالي وتجهيز بيانات الأوردر
// //       price += product.finalPrice * prd.quantity;
// //       products.push({
// //         productId: prd.productId, // نحتاجه للخصم لاحقاً
// //         name: product.name,
// //         price: product.finalPrice,
// //         quantity: prd.quantity,
// //         image: product.thumbnail?.secure_url,
// //       });
// //     }

// //     // 3. إنشاء الأوردر في قاعدة البيانات (حفظ السجل أولاً لضمان سلامة البيانات)
// //     const order = await this._OrderRepository.create({
// //       ...data,
// //       cart: cart._id,
// //       user: userId,
// //       price,
// //     });

// //     // 4. الآن نقوم بخصم الكميات من المخزن الفعلي في قاعدة البيانات
// //     for (const item of products) {
// //       await this._ProductService.updateStock(
// //         item.productId as any,
// //         item.quantity,
// //         false, // false تعني خصم (Decrement)
// //       );
// //     }

// //     // 5. مسح محتويات العربة بعد نجاح العملية
// //     await this._CartService.clearCart(userId);

// //     // 6. منطق الرد النهائي وتحديد وسيلة الدفع

// //     // أ: في حالة الدفع النقدي (Cash)
// //     if (data.paymentMethod === PaymentMethod.cash) {
// //       return { message: 'Order created successfully (Cash)', order };
// //     }

// //     // ب: في حالة الدفع بالبطاقة (Card) - ننتقل لإنشاء جلسة Stripe
// //     const session = await this.payWithCard(order._id, products, user.email);

// //     return {
// //       message: 'Checkout session created',
// //       data: session.url,
// //       orderId: order._id,
// //     };
// //   }

// //   async payWithCard(orderId: any, products: any[], userEmail: string) {
// //     const line_items = products.map((product) => ({
// //       price_data: {
// //         currency: 'egp',
// //         product_data: {
// //           name: product.name,
// //           images: [product.image],
// //         },
// //         unit_amount: product.price * 100, // Stripe expects the amount in the smallest currency unit (e.g., piasters/cents)
// //       },
// //       quantity: product.quantity,
// //     }));
// //     const { id } = await this._PaymentService.createCoupon({
// //       currency: 'egp',
// //       percent_off: 20,
// //     });
// //     // card >> payment online >>>>
// //     return this._PaymentService.createCheckoutSession({
// //       metadata: { orderId },
// //       customer_email: userEmail,
// //       line_items,
// //       discounts: [{ coupon: id }],
// //     });
// //   }

// //   async cancelOrder(orderId: Types.ObjectId, userId: Types.ObjectId) {
// //     const order = await this._OrderRepository.findOne({
// //       filter: { user: userId, _id: orderId },
// //     });

// //     if (!order) throw new NotFoundException('Order invalid!');

// //     const paymentintent = order.payment_intent;
// //     console.log({ paymentintent });

// //     if (order.paymentMethod == PaymentMethod.card) {
// //       await this._PaymentService.refund(order.payment_intent);
// //       order.orderStatus = OrderStatus.refunded;
// //     }

// //     order.orderStatus = OrderStatus.canceled;
// //     await order.save();

// //     return { message: 'Done' };
// //   }

// //   async stripeWebhook(info: any) {
// //     const { orderId } = info.data.object.metadata;
// //     const order = await this._OrderRepository.update({
// //       filter: {
// //         _id: Types.ObjectId.createFromHexString(orderId),
// //         paid: false,
// //         paymentMethod: PaymentMethod.card,
// //       },
// //       update: {
// //         paid: true,
// //         payment_intent: info.data.object.payment_intent,
// //       },
// //     });

// //     await this._CartService.clearCart(order!.user);
// //   }
// // }

```

---

## src\modules\product\dto\create-product.dto.ts

```typescript
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description!: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  price!: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  discount!: number;

  @IsNumber()
  @Min(1)
  @IsInt()
  @Type(() => Number)
  stock!: number;
}

```

---

## src\modules\product\dto\find-products.dto.ts

```typescript
import { Types } from 'mongoose';
import {
  IsOptional,
  IsMongoId,
  IsString,
  ValidateNested,
  IsInt,
  Min,
  IsPositive,
  IsNumber,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

class PriceDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  min?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  max?: number;
}

class SortDto {
  @IsOptional()
  @IsString()
  by?: string;

  @IsOptional()
  @Type(() => Number)
  @IsIn([-1, 1])
  dir?: -1 | 1; // TS level
}

export class FindProductsDto {
  @IsOptional()
  @IsMongoId()
  category?: Types.ObjectId;

  @IsOptional()
  @IsMongoId()
  subCategory?: Types.ObjectId;

  @IsOptional()
  @IsString()
  k?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PriceDto)
  price?: PriceDto; // price object >>> price[min] price[max]

  @IsOptional()
  @ValidateNested()
  @Type(() => SortDto)
  sort?: SortDto; // sort[dir] sort[by]

  @IsOptional()
  @IsInt()
  @Min(1)
  @IsPositive()
  @Type(() => Number)
  page?: number;
}

```

---

## src\modules\product\dto\remove-image.dto..ts

```typescript
import { IsUrl } from 'class-validator';

export class RemoveImageDto {
  @IsUrl()
  secure_url: string;
}

```

---

## src\modules\product\dto\update-product.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}

```

---

## src\modules\product\entities\product.entity.ts

```typescript
export class Product {}

```

---

## src\modules\product\pipes\required-thumbnail.pipe.ts

```typescript
import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ThumbnailRequiredPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // التحقق مما إذا كانت قيمة الملفات فارغة أو لا تحتوي على حقل thumbnail
    if (!value || !value.thumbnail) {
      throw new BadRequestException('Thumbnail is required!');
    }

    return value;
  }
}

```

---

## src\modules\product\product.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\product\product.controller.ts

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  ParseBoolPipe,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { User } from 'src/common/decorarors/user.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { ThumbnailRequiredPipe } from './pipes/required-thumbnail.pipe';
import { RemoveImageDto } from './dto/remove-image.dto.';
import { FindProductsDto } from './dto/find-products.dto';
import { Public } from 'src/common/decorarors/public.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.seller, Role.user)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'images', maxCount: 3 },
    ]),
  )
  @Post(':subCategoryId')
  async create(
    @User('_id') userId: Types.ObjectId,
    @Param('subCategoryId', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @UploadedFiles(ThumbnailRequiredPipe)
    images: Record<string, Express.Multer.File[]>,
    @Body() data: CreateProductDto,
  ) {
    return this.productService.create(userId, subCategoryId, images, data);
  }

  @Roles(Role.seller)
  @Patch(':id')
  async update(
    @User('_id') userId: Types.ObjectId,
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @Body() data: UpdateProductDto,
  ) {
    return this.productService.update(userId, productId, data);
  }

  @Roles(Role.seller)
  @Patch(':id/remove-image')
  async removeImage(
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @Body() data: RemoveImageDto,
  ) {
    return this.productService.removeImage(productId, userId, data.secure_url);
  }
  @Roles(Role.seller, Role.user)
  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id/add-image')
  async addImage(
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() image: Express.Multer.File,
    @Query('isThumbnail', ParseBoolPipe) isThumbnail: boolean,
  ) {
    return this.productService.addImage(productId, userId, isThumbnail, image);
  }

  @Roles(Role.seller, Role.admin)
  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) productId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.productService.remove(productId, userId);
  }

  @Public()
  @Get(':id')
  async find(@Param('id', ParseObjectIdPipe) productId: Types.ObjectId) {
    return this.productService.find(productId);
  }

  @Public()
  @Get()
  async findAll(@Query() query: FindProductsDto) {
    return this.productService.findAll(query);
  }

  @Public()
  @Get('/redis')
  async testRedis() {
    return this.productService.testRedis();
  }
}

```

---

## src\modules\product\product.module.ts

```typescript
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { ProductModel } from 'src/DB/models/product.model';
import { CategoryModule } from '../category/category.module';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import { Socket } from 'socket.io';
import { SocketModule } from '../socket/socket.module';
import { SubCategoryModule } from '../sub-category/sub-category.module';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  imports: [
    ProductModel,
    CategoryModule,
    FileUploadModule,
    SocketModule,
    SubCategoryModule,
  ],
  exports: [ProductRepository, ProductService],
})
export class ProductModule {}

```

---

## src\modules\product\product.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\product\product.service.ts

```typescript
import { Multer } from 'multer';
import { StockGateway } from './../socket/stock.gateway';
import { ProductDocument } from './../../DB/models/product.model';
import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { ConfigService } from '@nestjs/config';
import { Types } from 'mongoose';
import { Image } from 'src/common/types/image.type';
import { nanoid } from 'nanoid';
import { FindProductsDto } from './dto/find-products.dto';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';

@Injectable()
export class ProductService {
  constructor(
    private readonly _ProductRepository: ProductRepository,
    private readonly _CategoryRepository: CategoryRepository,
    private readonly _SubCategoryRepository: SubCategoryRepository,
    private readonly _FileUploadService: FileUploadService,
    private readonly _ConfigService: ConfigService,
    private readonly _StockGateway: StockGateway,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(
    userId: Types.ObjectId,
    subCategoryId: Types.ObjectId,
    files: Record<string, Express.Multer.File[]>,
    data: CreateProductDto,
  ) {
    // 1. التحقق من وجود الفئة (Category)
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });
    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    // 2. التحقق من عدم تكرار اسم المنتج
    const isProduct = await this._ProductRepository.findOne({
      filter: { name: data.name },
    });
    if (isProduct) {
      throw new ConflictException(
        `Product with name ${data.name} already exists!`,
      );
    }

    // 3. إعداد مسار المجلد على Cloudinary
    const rootFolder = this._ConfigService.get('CLOUD_ROOT_FOLDER');
    const cloudFolder = `${rootFolder}/product/${nanoid()}`;

    // 4. رفع الصورة المصغرة (Thumbnail) - إجبارية
    const [thumbnail] = await this._FileUploadService.saveFileToCloud(
      files.thumbnail,
      { folder: cloudFolder },
    );

    // 5. رفع معرض الصور (Images) - اختيارية
    let images: Image[] | undefined;
    if (files.images) {
      images = await this._FileUploadService.saveFileToCloud(files.images, {
        folder: cloudFolder,
      });
    }

    // 6. إنشاء المنتج في قاعدة البيانات
    const product = await this._ProductRepository.create({
      ...data,
      cloudFolder,
      createdBy: userId,
      subCategory: subCategoryId,
      category: subCategory.category._id,
      thumbnail,
      ...(images && { images }), // إضافة مصفوفة الصور فقط إذا كانت موجودة
    });

    // إرجاع النتيجة النهائية
    return { data: product };
  }

  async update(
    userId: Types.ObjectId,
    productId: Types.ObjectId,
    data: UpdateProductDto,
  ) {
    const product = await this._ProductRepository.update({
      filter: { _id: productId, createdBy: userId }, // check owner
      update: { ...data },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);

    return { data: product };
  }

  async removeImage(
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    secure_url: string,
  ) {
    // pId, seller, secure_url
    const product = await this._ProductRepository.findOne({
      filter: {
        _id: productId,
        createdBy: userId,
        $or: [
          { 'thumbnail.secure_url': secure_url },
          { 'images.secure_url': secure_url },
        ],
      },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);

    const { thumbnail, images } = product;

    // secure url >>> thumbnail
    if (thumbnail?.secure_url == secure_url) {
      if (!images?.length)
        throw new BadRequestException(
          'Cannot remove the only existed image. Please uplaod another one first!  ',
        );

      await this._FileUploadService.deleteFiles([thumbnail.public_id]);

      // replace the thumbnail
      const lastImage = images[images.length - 1];
      product.thumbnail = lastImage;

      // remove from the images
      product.images.pop();
    } else {
      // secure_url >>> images ... images 3
      const imageToRemove = images?.find((img) => img.secure_url == secure_url);

      await this._FileUploadService.deleteFiles([imageToRemove!.public_id]);

      product.images = images.filter((img) => img.secure_url != secure_url);
    }

    await product.save();

    return { data: product };
  }

  async addImage(
    productId: Types.ObjectId,
    userId: Types.ObjectId,
    isThumbnail: boolean,
    image: Express.Multer.File,
  ) {
    const product = await this._ProductRepository.findOne({
      filter: {
        _id: productId,
        createdBy: userId,
      },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${productId} not found!`);

    if (!image) throw new BadRequestException(`Image is required!`);

    if (isThumbnail) {
      const [thumbnail] = await this._FileUploadService.saveFileToCloud(
        [image],
        {
          public_id: product.thumbnail.public_id,
        },
      );

      product.thumbnail = thumbnail;
    } else {
      const results = await this._FileUploadService.saveFileToCloud([image], {
        folder: product.cloudFolder,
      });

      product.images.push(results[0]);
    }

    await product.save();

    return { data: product };
  }

  async remove(productId: Types.ObjectId, userId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) throw new NotFoundException(`Product not found!`);

    await product.deleteOne();

    return { data: product };
  }

  async find(productId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found!`);
    }

    return { data: product };
  }

  async testRedis() {
    // set key
    await this.cacheManager.set('testnestjs', 'Hi');
    // get key
    const result = await this.cacheManager.get('testnestjs');

    return { data: result };
  }

  async findAll(query: FindProductsDto) {
    const key = `products:${JSON.stringify(query)}`;
    const cached = await this.cacheManager.get(key);
    if (cached) return { data: cached };
    const products = await this._ProductRepository.findAll({
      filter: {
        ...(query.category && {
          category: new Types.ObjectId(query.category),
        }),
        ...(query.k && {
          $or: [
            { name: { $regex: query.k, $options: 'i' } },
            { description: { $regex: query.k, $options: 'i' } },
          ],
        }),
        ...(query.price && {
          finalPrice: {
            ...(query.price.min !== undefined && { $gte: query.price.min }),
            ...(query.price.max !== undefined && { $lte: query.price.max }),
          },
        }),
      },
      sort: {
        ...(query.sort?.by && {
          [query.sort.by]: query.sort.dir ? query.sort.dir : 1, // {price: 1}
        }),
      },
      paginate: { page: query.page || 1 },
    });
    // cache
    await this.cacheManager.set(key, products, 50000);
    return { data: products };
  }

  async checkProductExistence(productId: Types.ObjectId) {
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });
    if (!product) throw new NotFoundException('Product not found!');
    return product;
  }

  inStock(product: ProductDocument, requiredQuantity: number) {
    return product.stock >= requiredQuantity;
  }

  async updateStock(
    productId: Types.ObjectId,
    quantity: number,
    increment: boolean,
  ) {
    // 1. تحديث الستوك في قاعدة البيانات
    await this._ProductRepository.update({
      filter: { _id: productId },
      update: { $inc: { stock: increment ? quantity : -quantity } },
    });

    // 2. بما أن update لا تعيد البيانات، يجب جلب المنتج يدوياً إذا أردت استخدامه في الـ Socket
    const updatedProduct = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (updatedProduct) {
      this._StockGateway.broadcastStockUpdate(
        updatedProduct._id,
        updatedProduct.stock,
      );
    }

    return updatedProduct;
  }

  private async clearProductCache() {
    try {
      // الوصول إلى الـ store باستخدام Type Casting لتجنب خطأ "property store does not exist"
      const store = (this.cacheManager as any).store;

      // جلب جميع المفاتيح الموجودة في الكاش
      const keys: string[] = await store.keys();

      // فلترة المفاتيح التي تبدأ بـ "products:"
      const productKeys = keys.filter((key) => key.startsWith('products:'));

      if (productKeys.length > 0) {
        // حذف المفاتيح المفلترة بالتوازي لضمان السرعة
        await Promise.all(productKeys.map((key) => this.cacheManager.del(key)));

        console.log(
          `[Cache Cleared] Removed ${productKeys.length} keys: ${productKeys}`,
        );
      } else {
        console.log(' [Cache] No product keys found to clear.');
      }
    } catch (error) {
      // منع توقف التطبيق في حالة فشل عملية الكاش
      console.error('[Cache Error] Failed to clear product cache:', error);
    }
  }

  // دالة لتحديث متوسط التقييمات وعددها للمنتج
  async updateProductRating(
    productId: any,
    rateAvg: number,
    rateCount: number,
  ) {
    // نستخدم Number(rateAvg.toFixed(1)) لتقريب الرقم لكسر عشري واحد (مثلاً 4.5322 يصبح 4.5)
    const roundedAvg = Number(rateAvg.toFixed(1));

    await this._ProductRepository.findOneAndUpdate(
      { _id: productId }, // الفلتر
      {
        rateAvg: roundedAvg,
        rateCount: rateCount,
      }, // التحديث
      { returnDocument: 'after' }, // الخيارات
    );
  }
}

```

---

## src\modules\review\dto\create-review.dto.ts

```typescript
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsMongoId()
  productId!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating!: number;

  @IsOptional()
  @IsString()
  comment?: string;
}

```

---

## src\modules\review\dto\update-review.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}

```

---

## src\modules\review\entities\review.entity.ts

```typescript
export class Review {}

```

---

## src\modules\review\review.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

describe('ReviewController', () => {
  let controller: ReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [ReviewService],
    }).compile();

    controller = module.get<ReviewController>(ReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\review\review.controller.ts

```typescript
import { AuthGuard } from './../../common/guards/auth.guard';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { User } from 'src/common/decorarors/user.decorator'; // الـ Decorator لجلب الـ User
import { Types } from 'mongoose';
import { UseGuards } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  constructor(private readonly _ReviewService: ReviewService) {}

  // إضافة تقييم (مغلق للمستخدمين المسجلين فقط)
  @Post()
  @UseGuards(AuthGuard)
  async addReview(
    @Body() body: CreateReviewDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._ReviewService.addReview(body, userId);
  }

  // جلب تقييمات منتج (مفتوح للعامة لكي يقرأها الزوار)
  @Get(':productId')
  async getProductReviews(@Param('productId') productId: string) {
    return await this._ReviewService.getProductReviews(productId);
  }
}

```

---

## src\modules\review\review.module.ts

```typescript
import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewRepository } from 'src/DB/repositories/review.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from 'src/DB/models/review.model';
import { OrderModule } from '../order/order.module'; // للتحقق من الشراء
import { ProductModule } from '../product/product.module'; // للتحقق من المنتج
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    OrderModule, // تأكد من أن الـ OrderModule يعمل له export لـ OrderRepository
    ProductModule,
    AuthModule,
    UserModule,
  ],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository],
})
export class ReviewModule {}

```

---

## src\modules\review\review.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ReviewService } from './review.service';

describe('ReviewService', () => {
  let service: ReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewService],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\review\review.service.ts

```typescript
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Types } from 'mongoose';
import { ReviewRepository } from 'src/DB/repositories/review.repository';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { ProductService } from '../product/product.service';
import { OrderStatus } from 'src/DB/models/order.model';

@Injectable()
export class ReviewService {
  constructor(
    private readonly _ReviewRepository: ReviewRepository,
    private readonly _OrderRepository: OrderRepository,
    private readonly _ProductService: ProductService,
  ) {}

  async addReview(data: CreateReviewDto, userId: Types.ObjectId) {
    // 1. التأكد أن المنتج موجود
    const product = await this._ProductService.checkProductExistence(
      data.productId as any,
    );

    // 2. فحص هل قام العميل بشراء هذا المنتج وهل استلمه؟
    // تأكد أن OrderRepository يستخدم نفس الـ Abstract Repository ليقبل الـ filter
    const hasBoughtAndReceived = await this._OrderRepository.findOne({
      filter: {
        user: userId,
        orderStatus: OrderStatus.delivered,
        'products.productId': data.productId,
      },
    });

    if (!hasBoughtAndReceived) {
      throw new BadRequestException(
        'لا يمكنك تقييم هذا المنتج. يجب أن تكون قد اشتريته واستلمته أولاً.',
      );
    }

    // 3. فحص هل قام بتقييمه من قبل؟
    // 💡 لاحظ هنا: استخدمنا { filter: { ... } } بناءً على AbstractRepository
    const existingReview = await this._ReviewRepository.findOne({
      filter: {
        user: userId,
        product: data.productId,
      },
    });

    if (existingReview) {
      throw new BadRequestException('لقد قمت بتقييم هذا المنتج مسبقاً.');
    }

    // 4. إنشاء التقييم وحفظه
    const review = await this._ReviewRepository.create({
      user: userId,
      product: new Types.ObjectId(data.productId as string) as any,
      rating: data.rating,
      comment: data.comment,
    });

    // تحديث (Average Rating) في جدول المنتجات
    await this.updateProductAverageRating(data.productId);

    return { message: 'تم إضافة التقييم بنجاح', review };
  }

  // جلب تقييمات منتج معين مع دعم الـ Populate لمعرفة اسم صاحب التقييم
  async getProductReviews(productId: string) {
    // 💡 لاحظ هنا: استخدمنا findAll ومررنا filter و populate
    const result = await this._ReviewRepository.findAll({
      filter: { product: productId },
      populate: { path: 'user', select: 'name image' }, // لجلب صورة واسم العميل
    });

    // الدالة findAll لديك ترجع كائن يحتوي على (totalSize, data, الخ..)
    return {
      count: result.totalSize,
      reviews: result.data,
    };
  }

  // ==========================================
  // دالة مساعدة لتحديث متوسط التقييمات في المنتج
  // ==========================================
  private async updateProductAverageRating(productId: string) {
    const result = await this._ReviewRepository.findAll({
      filter: { product: productId },
      // لن نحتاج لـ Pagination هنا لأننا نريد حساب كل التقييمات
      // يمكنك تمرير limit كبير أو تعديل findAll لتتجاهل الـ limit لو لم يُمرر paginate
    });

    const reviews = result.data || [];

    if (reviews.length > 0) {
      const sum = reviews.reduce((acc, item) => acc + item.rating, 0);
      const avgRating = sum / reviews.length;

      // الدالة دي المفروض تكون موجودة في الـ ProductService
      await this._ProductService.updateProductRating(
        productId,
        avgRating,
        reviews.length,
      );
    }
  }
}

```

---

## src\modules\socket\socket.module.ts

```typescript
import { Module } from '@nestjs/common';
import { StockGateway } from './stock.gateway';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  providers: [StockGateway],
  imports: [JwtModule, UserModule],
  exports: [StockGateway],
})
export class SocketModule {}

```

---

## src\modules\socket\stock.gateway.ts

```typescript
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Types } from 'mongoose';
import { Server, Socket } from 'socket.io';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { UserRepository } from 'src/DB/repositories/user.repository';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class StockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: Server;
  socketUsers = new Map<string, Socket>(); // key >>> value

  constructor(
    private readonly _JwtService: JwtService,
    private readonly _ConfigService: ConfigService,
    private readonly _UserRepository: UserRepository,
    private readonly _TokenRepository: TokenRepository,
  ) {}

  async handleConnection(client: Socket) {
    // check token
    const authHeader = client.handshake.auth?.authorization;
    console.log({ authHeader });

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Invalid token!');
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = this._JwtService.verify(token, {
        secret: this._ConfigService.get('JWT_SECRET'),
      });

      const user = await this._UserRepository.findOne({
        filter: { _id: payload.id },
      });

      if (!user) throw new NotFoundException('User not found!');

      const tokenDoc = await this._TokenRepository.findOne({
        filter: { token, isValid: true, user: user._id },
      });

      if (!tokenDoc) throw new UnauthorizedException('Invalid token!');

      client.data.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    const userId = client.data.user.id;
    this.socketUsers.set(userId, client);
    console.log('Client connected: ', client.id);
    console.log('Client connected: ', userId);
  }

  // on
  handleDisconnect(client: any) {
    this.socketUsers.delete(client.data.user.id);
    console.log('Client disconnected: ', client.data.user.id);
  }

  // notify all users with the stock update
  broadcastStockUpdate(productId: Types.ObjectId, newStock: number) {
    this.server.emit('stock-update', { productId, stock: newStock });
  }

  // listen >>> .on
  @SubscribeMessage('get-data') // frontend emit get-data
  handleGetData(client: Socket, data: any) {
    console.log('Recieved event get-data!');
  }

  // private to specific socket
  @SubscribeMessage('private')
  privateMsg(client: Socket, data: { recevierId: string; message: string }) {
    const sender = client.data.user;

    if (!sender) {
      return client.emit('error', { message: 'Sender not authenticated!' });
    }

    const recevierSocket = this.socketUsers.get(data.recevierId);

    if (!recevierSocket) {
      return client.emit('error', { message: 'recevier not authenticated!' });
    }

    recevierSocket.emit('private', {
      message: data.message,
      from: { id: sender._id, name: sender.name },
    });
  }
}

```

---

## src\modules\sub-category\dto\create-sub-category.dto.ts

```typescript
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsMongoId()
  @IsNotEmpty()
  category!: Types.ObjectId;
}

```

---

## src\modules\sub-category\dto\update-sub-category.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategoryDto } from './create-sub-category.dto';

export class UpdateSubCategoryDto extends PartialType(CreateSubCategoryDto) {}

```

---

## src\modules\sub-category\entities\sub-category.entity.ts

```typescript
export class SubCategory {}

```

---

## src\modules\sub-category\sub-category.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';

describe('SubCategoryController', () => {
  let controller: SubCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoryController],
      providers: [SubCategoryService],
    }).compile();

    controller = module.get<SubCategoryController>(SubCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\sub-category\sub-category.controller.ts

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Types } from 'mongoose';
import { SubCategoryService } from './sub-category.service';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { Public } from 'src/common/decorarors/public.decorator';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { User } from 'src/common/decorarors/user.decorator';

@Controller('subcategory')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  @Roles(Role.admin, Role.user)
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() data: CreateSubCategoryDto,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.subCategoryService.create(data, userId, file);
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.subCategoryService.update(
      subCategoryId,
      updateSubCategoryDto,
      userId,
    );
  }

  @Roles(Role.admin, Role.user)
  @Patch(':id/image')
  @UseInterceptors(FileInterceptor('image'))
  async updateImage(
    @Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.subCategoryService.updateImage(subCategoryId, file, userId);
  }

  @Roles(Role.admin, Role.user)
  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.subCategoryService.remove(subCategoryId, userId);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) subCategoryId: Types.ObjectId) {
    return this.subCategoryService.findOne(subCategoryId);
  }

  @Public()
  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number) {
    return this.subCategoryService.findAll(page);
  }
}

```

---

## src\modules\sub-category\sub-category.module.ts

```typescript
import { Module } from '@nestjs/common';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { SubCategoryModel } from 'src/DB/models/sub-category.model';
import { CategoryModel } from 'src/DB/models/category.model';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { FileUploadModule } from 'src/common/services/fileupload/fileupload.module';
import { CloudinaryProvider } from 'src/common/services/fileupload/cloudinary.provider';

@Module({
  imports: [SubCategoryModel, CategoryModel, FileUploadModule],
  controllers: [SubCategoryController],
  providers: [
    SubCategoryService,
    SubCategoryRepository,
    CategoryRepository,
    CloudinaryProvider,
  ],
  exports: [SubCategoryRepository],
})
export class SubCategoryModule {}

```

---

## src\modules\sub-category\sub-category.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryService } from './sub-category.service';

describe('SubCategoryService', () => {
  let service: SubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoryService],
    }).compile();

    service = module.get<SubCategoryService>(SubCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\sub-category\sub-category.service.ts

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { SubCategoryRepository } from 'src/DB/repositories/sub-category.repository';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class SubCategoryService {
  constructor(
    private readonly _FileUploadService: FileUploadService,
    private readonly _configService: ConfigService,
    private readonly _SubCategoryRepository: SubCategoryRepository,
    private readonly _CategoryRepository: CategoryRepository,
  ) {}

  async create(
    data: CreateSubCategoryDto,
    userId: Types.ObjectId,
    file: Express.Multer.File,
  ) {
    const categoryExists = await this._CategoryRepository.findOne({
      filter: { _id: data.category },
    });

    if (!categoryExists) {
      throw new NotFoundException(
        `Category with id ${data.category} not found!`,
      );
    }

    const rootfolder = this._configService.get('CLOUD_ROOT_FOLDER');
    const cloudFolder = nanoid();

    const results = await this._FileUploadService.saveFileToCloud([file], {
      folder: `${rootfolder}/subcategory/${cloudFolder}`,
    });

    const subCategory = await this._SubCategoryRepository.create({
      name: data.name,
      category: data.category,
      cloudFolder,
      image: results[0],
      createdBy: userId,
    });

    return { data: subCategory };
  }

  async update(
    subCategoryId: Types.ObjectId,
    updateSubCategoryDto: UpdateSubCategoryDto,
    userId: Types.ObjectId,
  ) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    if (updateSubCategoryDto.name) {
      subCategory.name = updateSubCategoryDto.name;
      subCategory.updatedBy = userId;
      await subCategory.save();
    }

    return { data: subCategory };
  }

  async updateImage(
    subCategoryId: Types.ObjectId,
    file: Express.Multer.File,
    userId: Types.ObjectId,
  ) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    const public_id = subCategory.image.public_id;
    const results = await this._FileUploadService.saveFileToCloud([file], {
      public_id,
    });

    subCategory.image = results[0];
    subCategory.updatedBy = userId;
    await subCategory.save();

    return { data: subCategory };
  }

  async remove(subCategoryId: Types.ObjectId, userId: Types.ObjectId) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    await subCategory.deleteOne();

    return { message: 'done' };
  }

  async findOne(subCategoryId: Types.ObjectId) {
    const subCategory = await this._SubCategoryRepository.findOne({
      filter: { _id: subCategoryId },
    });

    if (!subCategory) {
      throw new NotFoundException(
        `SubCategory with id ${subCategoryId} not found!`,
      );
    }

    return { data: subCategory };
  }

  async findAll(page: number) {
    return {
      data: await this._SubCategoryRepository.findAll({
        populate: [
          { path: 'createdBy' },
          { path: 'category', select: 'name image' },
        ],
        paginate: { page },
      }),
    };
  }
}

```

---

## src\modules\user\dtos\add-address.dto.ts

```typescript
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddAddressDto {
  @IsNotEmpty() @IsString() city!: string;
  @IsNotEmpty() @IsString() street!: string;
  @IsNotEmpty() @IsString() phone!: string;
  @IsOptional() @IsString() postalCode?: string;
}

```

---

## src\modules\user\dtos\create-user.dto.ts

```typescript
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
  @IsString()
  @IsIn([Math.random], { message: 'password must match!' })
  @ValidateIf((obj) => obj.password !== obj.confirmPassword)
  confirmPassword!: string;
  @IsString()
  otp!: string;
}

```

---

## src\modules\user\user.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\user\user.controller.ts

```typescript
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Public } from 'src/common/decorarors/public.decorator';
import { User } from 'src/common/decorarors/user.decorator';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Role } from 'src/DB/enums/user.enum';
import { AddAddressDto } from './dtos/add-address.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _UserService: UserService) {}
  //profile
  @Get('/profile')
  @Roles(Role.user, Role.admin, Role.seller)
  //   @UseGuards(AuthGuard) // return true
  profile() {
    return 'Done'; //service
  }

  @Post('address')
  async addAddress(
    @Body() body: AddAddressDto,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._UserService.addAddress(body, userId);
  }

  @Delete('address/:addressId')
  async removeAddress(
    @Param('addressId') addressId: string,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._UserService.removeAddress(addressId, userId);
  }
}

```

---

## src\modules\user\user.module.ts

```typescript
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { UserModel } from 'src/DB/models/user.model';
import { UserController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { TokenRepository } from 'src/DB/repositories/token.repository';
import { TokenModel } from 'src/DB/models/token.model';

@Module({
  imports: [UserModel, TokenModel],
  providers: [UserService, UserRepository, JwtService, TokenRepository],
  exports: [UserService, UserRepository, TokenRepository],
  controllers: [UserController],
})
export class UserModule {}

```

---

## src\modules\user\user.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\user\user.service.ts

```typescript
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/DB/repositories/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { compareHash } from 'src/common/security/hash.util';
import { LoginDto } from '../auth/dto/login.dto';
import { UserDocument } from 'src/DB/models/user.model';
import { Types } from 'mongoose';
import { AddAddressDto } from './dtos/add-address.dto';
@Injectable()
export class UserService {
  constructor(private readonly _UserRepository: UserRepository) {}

  //create user
  async create(data: Partial<UserDocument>) {
    return this._UserRepository.create({ ...data });
  }

  async validateUser(data: LoginDto) {
    const { email, password } = data;
    const user = await this._UserRepository.findOne({ filter: { email } });
    if (!user || !compareHash(password, user.password))
      throw new UnauthorizedException('Invalid Credentials !');
    return user;
  }

  // check user

  async userExistByEmail(email: string) {
    const user = await this._UserRepository.findOne({ filter: { email } });
    return user;
  }

  // إضافة عنوان جديد
  async addAddress(addressData: AddAddressDto, userId: Types.ObjectId) {
    const user = await this._UserRepository.findOne({
      filter: { _id: userId },
    });

    if (!user) {
      throw new NotFoundException('المستخدم غير موجود');
    }

    const currentUser = user as any;
    const isFirstAddress = currentUser.addresses?.length === 0;
    const newAddress = { ...addressData, isDefault: isFirstAddress };

    const updatedUser = await this._UserRepository.findOneAndUpdate(
      { _id: userId },
      { $push: { addresses: newAddress } } as any,
      { returnDocument: 'after' },
    );

    return {
      message: 'تم إضافة العنوان بنجاح',
      addresses: (updatedUser as any)?.addresses,
    };
  }

  // حذف عنوان
  async removeAddress(addressId: string, userId: Types.ObjectId) {
    const updatedUser = await this._UserRepository.findOneAndUpdate(
      { _id: userId },
      { $pull: { addresses: { _id: new Types.ObjectId(addressId) } } } as any,
      { returnDocument: 'after' },
    );

    return {
      message: 'تم حذف العنوان بنجاح',
      addresses: (updatedUser as any)?.addresses,
    };
  }
}

```

---

## src\modules\wishlist\dto\create-wishlist.dto.ts

```typescript
export class CreateWishlistDto {}

```

---

## src\modules\wishlist\dto\update-wishlist.dto.ts

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateWishlistDto } from './create-wishlist.dto';

export class UpdateWishlistDto extends PartialType(CreateWishlistDto) {}

```

---

## src\modules\wishlist\entities\wishlist.entity.ts

```typescript
export class Wishlist {}

```

---

## src\modules\wishlist\wishlist.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';

describe('WishlistController', () => {
  let controller: WishlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishlistController],
      providers: [WishlistService],
    }).compile();

    controller = module.get<WishlistController>(WishlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

```

---

## src\modules\wishlist\wishlist.controller.ts

```typescript
import { Controller, Get, Param, Patch } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Types } from 'mongoose';
import { User } from 'src/common/decorarors/user.decorator';
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly _WishlistService: WishlistService) {}

  @Patch(':productId')
  async toggleWishlist(
    @Param('productId') productId: string,
    @User('_id') userId: Types.ObjectId,
  ) {
    return await this._WishlistService.toggleWishlist(productId, userId);
  }

  @Get()
  async getMyWishlist(@User('_id') userId: Types.ObjectId) {
    return await this._WishlistService.getUserWishlist(userId);
  }
}

```

---

## src\modules\wishlist\wishlist.module.ts

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { WishlistRepository } from 'src/DB/repositories/wishlist.repository';
import { Wishlist, WishlistSchema } from 'src/DB/models/wishlist.model';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Wishlist.name, schema: WishlistSchema },
    ]),
    ProductModule,
  ],
  controllers: [WishlistController],
  providers: [WishlistService, WishlistRepository],
})
export class WishlistModule {}

```

---

## src\modules\wishlist\wishlist.service.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { WishlistService } from './wishlist.service';

describe('WishlistService', () => {
  let service: WishlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishlistService],
    }).compile();

    service = module.get<WishlistService>(WishlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

---

## src\modules\wishlist\wishlist.service.ts

```typescript
import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { WishlistRepository } from 'src/DB/repositories/wishlist.repository';
import { ProductService } from '../product/product.service';

@Injectable()
export class WishlistService {
  constructor(
    private readonly _WishlistRepository: WishlistRepository,
    private readonly _ProductService: ProductService,
  ) {}

  // دالة التبديل (Toggle): إضافة إذا لم يكن موجوداً، حذف إذا كان موجوداً
  async toggleWishlist(productId: string, userId: Types.ObjectId) {
    // التأكد من وجود المنتج أولاً
    await this._ProductService.checkProductExistence(productId as any);

    const isExist = await this._WishlistRepository.findOne({
      filter: { user: userId, product: new Types.ObjectId(productId) as any },
    });

    if (isExist) {
      await this._WishlistRepository.delete({ _id: isExist._id });
      return { message: 'تمت إزالة المنتج من المفضلة' };
    }

    await this._WishlistRepository.create({
      user: userId,
      product: new Types.ObjectId(productId) as any,
    });
    return { message: 'تمت إضافة المنتج إلى المفضلة' };
  }

  // جلب قائمة مفضلة المستخدم
  async getUserWishlist(userId: Types.ObjectId) {
    const result = await this._WishlistRepository.findAll({
      filter: { user: userId },
      populate: {
        path: 'product',
        select: 'name price finalPrice thumbnail discount rateAvg',
      },
    });

    return {
      count: result.totalSize,
      wishlist: result.data,
    };
  }
}

```

---

## test\app.e2e-spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

```

---

## test\jest-e2e.json

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}

```

---

## tsconfig.build.json

```json
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}

```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,

    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "paths": {
      "src/*": ["./src/*"]
    },
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "noFallthroughCasesInSwitch": false,
    "types": ["jest", "node"]
  }
}

```

---

## vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
    }
  ]
}

```

---

