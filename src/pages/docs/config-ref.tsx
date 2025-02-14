// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import SEO from '../../components/seo'

import BuildContents from '../../components/content/docs/build'

const Docs = (props: PageProps) => (
  <DocsLayout title="Configuration Reference">
    <SEO title="Config Reference" />
    <div>
      <p>
        Just getting started?{' '}
        <Link to="/docs/build">Learn how to build a search index.</Link>
      </p>
      <p>
        Your Stork configuration file defines the way your index is created and
        processed, and also controls some aspects of how your search results are
        displayed.
      </p>
      <p>
        The configuration file parser relies heavily on intuitive default
        values: if a field is inapplicable to your search index (or if you're
        happy with the listed default value), you can leave the field out of
        your configuration file.
      </p>
      <p>
        Stork configuration files are guaranteed to be parseable in all future
        versions of Stork, though the Stork build phase will warn you if you're
        using deprecated fields in your configuration file. Fields may be
        deprecated in point releases of Stork, at which point they will also be
        undocumented. Setting deprecated fields will have no effect on your
        index.
      </p>
    </div>
    <h3>Input Options</h3>
    <p>Input options define how your files will be read and processed.</p>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{ width: '350px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>base_directory</code>
            </td>
            <td>String</td>
            <td>N/A, Required</td>
            <td>
              The directory to which each file path is relative. This file path
              must also be relative to the working directory.
            </td>
          </tr>

          <tr>
            <td>
              <code>files</code>
            </td>
            <td>
              Array of <strong>File</strong> objects
            </td>
            <td>
              <code>[]</code>
            </td>
            <td>
              The list of file objects Stork will index. (See the file object
              description below.)
            </td>
          </tr>

          <tr>
            <td>
              <code>url_prefix</code>
            </td>
            <td>String</td>
            <td>
              <code>""</code>
            </td>
            <td>
              If all your files point to URLs with the same prefix, you can put
              the prefix here so you don't repeat it in each file object.
            </td>
          </tr>

          <tr>
            <td>
              <code>title_boost</code>
            </td>
            <td>String</td>
            <td>
              <code>Moderate</code>
            </td>
            <td>
              One of: <code>Minimal</code>, <code>Moderate</code>,{' '}
              <code>Large</code>, and <code>Ridiculous</code>. Determines how
              much a result will be boosted if the search query matches the
              title.
            </td>
          </tr>

          <tr>
            <td>
              <code>html_selector</code>
            </td>
            <td>String</td>
            <td><code>main</code></td>
            <td>
              For all HTML files, this will control the container tag where 
              Stork will index content. Expects a CSS selector. 
              <a href="/docs/html/">See more</a>
            </td>
          </tr>
         
          <tr>
            <td>
              <code>frontmatter_handling</code>
            </td>
            <td>String</td>
            <td><code>Omit</code></td>
            <td>
              One of <code>Ignore</code>, <code>Omit</code>, or <code>Parse</code>. 
              If frontmatter is detected in your content, <code>Ignore</code> will{' '}
              <em>not handle the frontmatter in any special way</em>, 
              effectively including it in the index. <code>Omit</code> will 
              parse and remove frontmatter from indexed content.{' '}
              <code>Parse</code> does nothing.
            </td>
          </tr>

          <tr>
            <td>
              <code>stemming</code>
            </td>
            <td>String</td>
            <td>
              <code>English</code>
            </td>
            <td>
              The stemming algorithm the indexer should use while analyzing
              words. Should be <code>None</code> or one of the languages
              supported by <a href="https://snowballstem.org">Snowball Stem</a>,
              e.g. <code>Dutch</code>.
            </td>
          </tr>

          <tr>
            <td>
              <code>srt_config</code>
            </td>
            <td>
              <strong>SRT Config</strong> object
            </td>
            <td>See below</td>
            <td>
              For all SRT files, this object
              will describe how Stork will handle the timestamp information
              embedded in the file. <a href="/docs/srt">See more</a>
            </td>
          </tr>

          <tr>
            <td>
              <code>minimum_indexed_substring_length</code>
            </td>
            <td>Integer</td>
            <td>3</td>
            <td>
              The minimum substring length that gets indexed and is available to
              be searched. Setting this too low will make your index file
              gigantic.
            </td>
          </tr>

          <tr>
            <td>
              <code>minimum_index_ideographic_substring_length</code>
            </td>
            <td>Integer</td>
            <td>1</td>
            <td>
              If a string is made of{' '}
              <a href="https://en.wikipedia.org/wiki/CJK_Unified_Ideographs">
                CJK Ideographs
              </a>
              , its substrings should be shorter. This defines the minimum
              indexed substring length when indexing an ideographic string.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3> The File object</h3>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{ width: '400px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>String</td>
            <td>N/A, Required</td>
            <td>
              The document title. Used mainly for display purposes, but search
              queries with words in the title are given a boost.
            </td>
          </tr>

          <tr>
            <td>
              <code>url</code>
            </td>
            <td>String</td>
            <td>N/A, Required</td>
            <td>
              The location this search result links to online; this value
              eventually becomes the <code>href</code> of the search result
              link.
            </td>
          </tr>

          <tr>
            <td>
              <code>path</code>
            </td>
            <td>Optional String</td>
            <td>
              <code>null</code>
            </td>
            <td>
              The location of the document/file on disk. Each file object must
              have either a <code>path</code> or a <code>contents</code> field,
              but not both.
            </td>
          </tr>

          <tr>
            <td>
              <code>contents</code>
            </td>
            <td>Optional String</td>
            <td>
              <code>""</code>
            </td>
            <td>
              The contents of the document. Each file object must have either a{' '}
              <code>path</code> or a <code>contents</code> field, but not both.
            </td>
          </tr>

          <tr>
            <td>
              <code>html_selector_override</code>
            </td>
            <td>Optional String</td>
            <td>
              <code>null</code>
            </td>
            <td>
              Overrides the global <code>html_selector</code> configuration option for a given file.
            </td>
          </tr>

          <tr>
            <td>
              <code>stemming_override</code>
            </td>
            <td>Optional String</td>
            <td>
              <code>null</code>
            </td>
            <td>
              Overrides the stemming algorithm used for this document's language, instead of using the global <code>stemming</code> configuration.
            </td>
          </tr>

          <tr>
            <td>
              <code>filetype</code>
            </td>
            <td>Optional String</td>
            <td>
              <code>null</code>
            </td>
            <td>
              One of: <code>PlainText</code> <code>SRTSubtitle</code>, <code>HTML</code>, or <code>Markdown</code>.
              Usually, Stork can determine what kind of file it's looking at
              based on the file extension. If it's having trouble, you can
              override the derived filetype here.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>The SRT Configuration object</h3>
    <p>Read more about configuring SRT behavior on the <a href="/docs/srt">SRT documentation page</a>.</p>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{ width: '400px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>timestamp_linking</code>
            </td>
            <td>Boolean</td>
            <td>
              <code>true</code>
            </td>
            <td>
              Should Stork use the timestamp embedded in subtitle files to
              append the timestamp in the search result's URL?
            </td>
          </tr>

          <tr>
            <td>
              <code>timestamp_template_string</code>
            </td>
            <td>String</td>
            <td>
              <code>&amp;t={`{ts}`}</code>
            </td>
            <td>
              The string that gets appended to the URL. <code>{`{ts}`}</code>{' '}
              gets replaced with the timestamp of that result's excerpt. The
              default template string is the string used by YouTube.
            </td>
          </tr>

          <tr>
            <td>
              <code>timestamp_format</code>
            </td>
            <td>String</td>
            <td>
              <code>NumberOfSeconds</code>
            </td>
            <td>
              One of: <code>NumberOfSeconds</code>. Determines the format of the
              timestamp that replaces <code>{`{ts}`}</code> in the template
              string. The default format, "number of seconds", is the timestamp
              format used in YouTube links.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Output Configuration</h3>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{ width: '400px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>filename</code>
            </td>
            <td>string</td>
            <td>
              <code>output.st</code>
            </td>
            <td>The filename of the generated index file.</td>
          </tr>

          <tr>
            <td>
              <code>excerpt_buffer</code>
            </td>
            <td>Integer</td>
            <td>
              <code>8</code>
            </td>
            <td>
              The number of words that will surround each search term in the
              displayed search results. Also determines what defines a nearby
              word when grouping nearby search results into a single match.
            </td>
          </tr>

          <tr>
            <td>
              <code>excerpts_per_result</code>
            </td>
            <td>Integer</td>
            <td>
              <code>5</code>
            </td>
            <td>
              Defines the maximum number of excerpts that will be shown for each
              search result, if multiple excerpts match the search query.
            </td>
          </tr>

          <tr>
            <td>
              <code>displayed_results_count</code>
            </td>
            <td>Integer</td>
            <td>
              <code>10</code>
            </td>
            <td>
              Defines the maximum number of search results displayed in the
              list. Pushing this too high will result in performance issues.
            </td>
          </tr>

          <tr>
            <td>
              <code>debug</code>
            </td>
            <td>Boolean</td>
            <td>
              <code>false</code>
            </td>
            <td>
              When true, Stork will output a pretty-printed JSON representation
              of the index. This option should only be used for debugging.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DocsLayout>
)

export default Docs
